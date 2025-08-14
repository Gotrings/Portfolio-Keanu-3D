import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';
import { useEffect, useState, useRef } from 'react';

const translations = {
  id: {
    greeting: 'Halo, saya',
    name: 'Keanu Dustin Kemala',
    description: 'Menciptakan pengalaman digital yang indah dan fungsional dengan pendekatan yang berpusat pada pengguna. Passion saya adalah menggabungkan kreativitas dengan teknologi untuk menciptakan aplikasi web yang ramah untuk pengguna.',
    cta: 'Lihat Karya Saya',
  },
  en: {
    greeting: "Hello, I'm",
    name: 'Keanu Dustin Kemala',
    description: 'Creating beautiful and functional digital experiences with a user-centered approach. My passion is combining creativity with technology to create user-friendly web applications.',
    cta: 'View My Work',
  },
};

interface HeroProps {
  language: 'id' | 'en';
}

const TypingText = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  // Daftar teks yang akan ditampilkan secara bergantian
  const texts = [
    'Front-End Developer',
    'UI/UX Designer',
    'Prototyping',
    'AI Prompt Engineer',
    'Tech Enthusiast'
  ];
  const currentText = texts[currentTextIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const animate = () => {
      if (isWaiting) {
        // Tunggu sebentar sebelum mengetik teks berikutnya
        timeout = setTimeout(() => {
          setIsWaiting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setIsDeleting(false);
          setCurrentCharIndex(0);
          setDisplayText('');
        }, 1000); // Waktu tunggu sebelum mulai mengetik teks baru
      } else if (isDeleting) {
        // Menghapus teks
        if (currentCharIndex > 0) {
          timeout = setTimeout(() => {
            setDisplayText(currentText.substring(0, currentCharIndex - 1));
            setCurrentCharIndex(currentCharIndex - 1);
          }, 30); // Kecepatan menghapus
        } else {
          // Selesai menghapus, ganti ke teks berikutnya
          setIsWaiting(true);
        }
      } else {
        // Mengetik teks
        if (currentCharIndex < currentText.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentText.substring(0, currentCharIndex + 1));
            setCurrentCharIndex(currentCharIndex + 1);
          }, 100); // Kecepatan mengetik
        } else {
          // Selesai mengetik, tunggu sebentar lalu hapus
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, 2000); // Waktu tampil teks sebelum dihapus
        }
      }
    };

    animate();
    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentText, currentTextIndex, isDeleting, isWaiting, texts.length]);

  // Komponen untuk kursor yang berkedip
  const Cursor = () => (
    <motion.span
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: 'reverse'
      }}
      className="ml-0.5 w-1 h-6 bg-white inline-block"
    />
  );

  return (
    <div className="flex items-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="text-lg md:text-2xl font-medium text-white/80 inline-flex items-center"
      >
        {displayText}
        <Cursor />
      </motion.p>
    </div>
  );
};

export default function Hero({ language = 'id' }: HeroProps) {
  const t = translations[language];
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />

      {/* 3D Scene Background */}
      <div className="absolute inset-0 opacity-30">
        <ThreeScene className="w-full h-full" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-5 w-full max-w-8xl mx-auto text-center px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-5">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6 w-full lg:w-1/2 px-4 sm:px-0"
          >
            {/* Greeting and Name Section */}
            <div className="mb-4 sm:mb-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-2 flex flex-col items-start"
              >
                <p className="text-lg text-white/65 font-light">{t.greeting}</p>
                <div className="relative">
                  <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5,
                      backgroundPosition: {
                        duration: 5,  // Faster animation (reduced from 8s to 4s)
                        repeat: Infinity,
                        ease: 'easeInOut',
                        repeatType: 'reverse'
                      }
                    }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold relative z-10 bg-clip-text text-transparent text-left"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, hsl(36,77%,49%), hsl(188,78%,41%), hsl(36,77%,49%))',
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {t.name}
                  </motion.h1>
                </div>
              </motion.div>

              <div className="h-8 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div key={language}>
                    <TypingText />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base sm:text-lg text-white/65 leading-relaxed max-w-3xl min-h-[60px] sm:min-h-[80px]"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 flex-wrap justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="gradient-primary text-white font-semibold px-8 py-6 rounded-xl shadow-glow hover:scale-105 transition-all duration-300"
              >
                {t.cta}
              </Button>

              <div className="flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/keanu-dustin-kemala/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl hover:bg-blue-100 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/captathings/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl hover:bg-pink-100 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:keanudustin10@gmail.com" className="flex items-center">
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl hover:bg-gray-100 transition-colors">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px] order-2 lg:order-1"
          >
            <ThreeScene className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}