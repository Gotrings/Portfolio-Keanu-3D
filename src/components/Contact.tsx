import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Youtube, Linkedin, Instagram, Send } from 'lucide-react';
import gridPattern from '@/assets/grid.svg';

const translations = {
  id: {
    title: 'Mari Berkolaborasi',
    subtitle: 'Saya selalu terbuka untuk proyek menarik dan peluang kolaborasi',
    contact: {
      title: 'Informasi Kontak',
      description: 'Jangan ragu untuk menghubungi saya melalui berbagai platform yang tersedia.'
    },
    social: {
      title: 'Sosial Media',
      description: 'Ikuti aktivitas terbaru saya di platform sosial media.'
    }
  },
  en: {
    title: 'Let\'s Collaborate',
    subtitle: 'I\'m always open to interesting projects and collaboration opportunities',
    form: {
      name: 'Full Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message'
    },
    contact: {
      title: 'Contact Information',
      description: 'Feel free to reach out to me through various available platforms.'
    },
    social: {
      title: 'Social Media',
      description: 'Follow my latest activities on social media platforms.'
    }
  }
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'keanudustin10@gmail.com',
    href: 'mailto:keanudustin10@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 812 2991 7466',
    href: 'tel:+6281229917466'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cikarang Pusat, Kab.Bekasi, Indonesia',
    href: '#'
  }
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: '#',
    color: 'hover:text-gray-800 dark:hover:text-gray-200'
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: 'https://www.youtube.com/@CreativityBot',
    color: 'hover:text-red-600'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/keanu-dustin-kemala/',
    color: 'hover:text-blue-600'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/captathings/',
    color: 'hover:text-pink-600'
  }
];

interface ContactProps {
  language: 'id' | 'en';
}

export default function Contact({ language = 'id' }: ContactProps) {
  const t = translations[language];

  return (
    <section id="contact" className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url(${gridPattern})`,
            maskImage: 'linear-gradient(180deg, white, rgba(255, 255, 255, 0))',
            WebkitMaskImage: 'linear-gradient(180deg, white, rgba(255, 255, 255, 0))',
            backgroundSize: '20px 20px',
            backgroundRepeat: 'repeat'
          }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full">
            {language === 'id' ? 'Hubungi Saya' : 'Get In Touch'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">{t.title}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            {t.subtitle}
            <span className="inline-block mt-2 text-primary">✋</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="p-6 sm:p-8 glass h-full relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {t.contact.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t.contact.description}
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:scale-110 transition-transform">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="text-muted-foreground text-sm sm:text-base break-words">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="p-6 sm:p-8 glass h-full flex flex-col relative group overflow-hidden mt-6 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {t.social.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t.social.description}
                </p>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className={`p-3 sm:p-4 bg-muted/50 backdrop-blur-sm rounded-xl text-muted-foreground transition-all duration-300 ${social.color} hover:shadow-lg hover:-translate-y-1 border border-border/50`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                          <span className="text-xs sm:text-sm text-center">{social.label}</span>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}