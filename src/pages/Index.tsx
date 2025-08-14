import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  // Initialize language from localStorage and listen to changes
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as 'id' | 'en';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    const handleStorageChange = () => {
      const updatedLanguage = localStorage.getItem('portfolio-language') as 'id' | 'en';
      if (updatedLanguage) {
        setLanguage(updatedLanguage);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background"
    >
      <Navigation language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Projects language={language} />
      <Experience language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </motion.div>
  );
};

export default Index;
