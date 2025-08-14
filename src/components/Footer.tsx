import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const translations = {
  id: {
    copyright: '© 2025 Keanu Dustin Kemala. Dibuat dengan',
    rights: 'Semua hak dilindungi.',
    backToTop: 'Kembali ke atas'
  },
  en: {
    copyright: '© 2025 Keanu Dustin Kemala. Made with',
    rights: 'All rights reserved.',
    backToTop: 'Back to top'
  }
};

interface FooterProps {
  language: 'id' | 'en';
}

export default function Footer({ language = 'id' }: FooterProps) {
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-muted/30 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="flex items-center justify-center text-muted-foreground">
              {t.copyright}
              <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" />
              {language === 'id' ? 'dan teknologi terdepan' : 'and cutting-edge technology'}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.rights}
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-24 h-px bg-gradient-primary opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent rounded-full blur-3xl" />
      </div>
    </footer>
  );
}