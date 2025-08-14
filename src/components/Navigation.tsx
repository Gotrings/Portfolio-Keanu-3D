'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Language = 'id' | 'en';
type Theme = 'light' | 'dark';

const translations = {
  id: {
    home: 'Beranda',
    about: 'Tentang',
    projects: 'Karya & Proyek',
    experience: 'Pengalaman & Kegiatan',
    contact: 'Kontak',
  },
  en: {
    home: 'Home',
    about: 'About',
    projects: 'Works & Projects',
    experience: 'Experience & Activities',
    contact: 'Contact',
  },
};

interface NavigationProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[language];

  // Load theme from localStorage
  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme) {
      // Apply theme without transition on initial load
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      setTheme(savedTheme);
    }
  }, []);

  // Handle theme changes
  useEffect(() => {
    // Add transition class to body
    document.body.classList.add('transition-colors');
    
    // Apply theme change
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('portfolio-theme', theme);
    
    // Remove transition class after transition completes
    const timer = setTimeout(() => {
      document.body.classList.remove('transition-colors');
    }, 200); // Match this with --transition-duration in CSS
    
    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'id' ? 'en' : 'id';
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'experience', href: '#experience' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'glass shadow-elegant' : 'bg-transparent'
      } transition-colors duration-500`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between transition-colors duration-500">

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.key}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-foreground hover:text-primary transition-colors duration-500 font-medium"
            >
              {t[item.key as keyof typeof t]}
            </motion.a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <motion.div 
            initial={false}
            animate={{ 
              rotate: theme === 'light' ? 0 : 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              delay: 0.1
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full transition-colors duration-700"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <motion.span
                key={theme}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {theme === 'light' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.span>
            </Button>
          </motion.div>

          {/* Language Toggle */}
          <motion.div 
            className="relative"
          >
            <Button
              variant="ghost"
              size="lg"
              onClick={toggleLanguage}
              className="group h-10 px-3 rounded-full border border-transparent hover:border-border/50 transition-all duration-300 flex items-center gap-2"
              aria-label={`Change language to ${language === 'id' ? 'English' : 'Bahasa Indonesia'}`}
            >
              <motion.div
                key={language}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <Globe className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-sm font-medium">
                  {language === 'id' ? 'ID' : 'EN'}
                </span>
              </motion.div>
              <motion.span 
                className="absolute -bottom-1 left-1/2 w-4 h-0.5 bg-primary transform -translate-x-1/2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: language === 'id' ? '1rem' : '1.5rem' }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded-full transition-colors duration-500"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border/20 transition-colors duration-500"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="block text-foreground hover:text-primary transition-colors duration-500 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t[item.key as keyof typeof t]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
