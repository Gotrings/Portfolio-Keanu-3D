import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, Users, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// Import images using Vite's import.meta.glob for better production support
type ImageModule = { default: string };
const images = import.meta.glob<ImageModule>('@/assets/*.{jpg,jpeg,png,svg}', { 
  query: '?url',
  import: 'default',
  eager: true 
});

// Helper function to get image URL
export const getImageUrl = (imageName: string): string => {
  const key = Object.keys(images).find(key => key.includes(imageName));
  return key ? images[key].default : '';
};

// Image paths
const Belajar1Images: string = getImageUrl('Belajar Dasar Git dengan GitHub');
const Belajar2Images: string = getImageUrl('Belajar Dasar Pemrograman JavaScript');
const Belajar3Images: string = getImageUrl('Belajar Back-End Pemula dengan JavaScript');
const Belajar4Images: string = getImageUrl('Belajar Dasar Pemrograman Web');
const Belajar5Images: string = getImageUrl('Belajar Fundamental Front-End Web Development');
const Belajar6Images: string = getImageUrl('Belajar Membuat Front End Web untuk Pemula');
const Belajar7Images: string = getImageUrl('Belajar Pengembangan Web Intermediate');
const Belajar9Images: string = getImageUrl('Memulai Dasar Pemrograman Untuk Menajdi Pengembang Software');
const Belajar10Images: string = getImageUrl('Pengenalan ke Logika Pemrograman');
const Belajar11Images: string = getImageUrl('Finacial Literacy');
const sertifikat1Images: string = getImageUrl('English Sertificate');
const sertifikat2Images: string = getImageUrl('standar-1');
const sertifikat3Images: string = getImageUrl('Coding Camp 2025-1');
const sertifikat4Images: string = getImageUrl('Coding Camp 2025-2');
const sertifikat5Images: string = getImageUrl('Coding Camp 2025-3');
const magang1Images: string = getImageUrl('magang-1');
const UIUX1Image: string = getImageUrl('UIUX-1');
const UIUX2Image: string = getImageUrl('UI-UX-2');

type ExperienceItem = {
  title: {
    id: string;
    en: string;
  };
  company: {
    id: string;
    en: string;
  };
  period?: {
    id: string;
    en: string;
  };
  location: string;
  description: {
    id: string;
    en: string;
  };
  skills: string[];
  images?: string[];
};

const translations = {
  id: {
    title: 'Pengalaman & Kegiatan',
    tabs: {
      experience: 'Pengalaman Kerja',
      education: 'Pendidikan',
      certificates: 'Sertifikat',
      activities: 'Kegiatan'
    }
  },
  en: {
    title: 'Experience & Activities',
    tabs: {
      experience: 'Work Experience',
      education: 'Education',
      certificates: 'Certificates',
      activities: 'Activities'
    }
  }
};

// Experience Data Type
type ExperienceData = {
  experience: ExperienceItem[];
  education: ExperienceItem[];
  certificates: ExperienceItem[];
  activities: ExperienceItem[];
};

// Pengalaman Kerja
const experienceData: ExperienceData = {
  experience: [
    {
      title: {
        id: 'Magang Backend Developer & Admin',
        en: 'Internship Backend Developer & Admin'
      },
      company: {
        id: 'PT Dharma Polimetal',
        en: 'PT Dharma Polymetal'
      },
      period: {
        id: 'Januari 2024 - Maret 2024',
        en: 'January 2024 - March 2024'
      },
      location: 'Cikarang Selatan, Kab.Bekasi, Indonesia',
      description: {
        id: 'Membuat aplikasi menggunakan laravel untuk pembutan dashboard untuk track barang dan bertanggung jawab dalam pembuatan qr code untuk rak barang serta tracking truk.',
        en: 'Developing an application using Laravel for the creation of a dashboard for tracking goods and responsible for creating QR codes for rack goods as well as truck tracking.'
      },
      skills: ['Laravel', 'Dashboard', 'QR Code', 'Tracking', 'Excel']
    },
    {
      title: {
        id: 'Mentee Coding Camp powered By DBS Foundation 2025',
        en: 'Mentee Coding Camp powered By DBS Foundation 2025'
      },
      company: {
        id: 'Dicoding & DBS Foundation',
        en: 'Dicoding & DBS Foundation'
      },
      period: {
        id: 'Januari 2025 - Juni 2025',
        en: 'January 2025 - June 2025'
      },
      location: 'Online',
      description: {
        id: 'Mengikuti program Coding Camp yang disediakan oleh Dicoding & DBS Foundation. Mengembangkan skills pada Front-End dan Back-End.',
        en: 'Participating in the Coding Camp program provided by Dicoding & DBS Foundation. Developing skills in Front-End and Back-End.'
      },
      skills: ['React', 'TypeScript', 'Node.js', 'Deployment', 'Tailwind CSS', 'Git', 'GitHub', 'Vite', 'Radix UI', 'Shadcn UI', 'Figma']
    }
  ],
  education: [
    {
      title: {
        id: 'Teknologi Rekaya Perangkat Lunak',
        en: 'Software Engineering Technology'
      },
      company: {
        id: 'Politeknik Meta Industri Cikarang',
        en: 'Polytechnic Meta Industry Cikarang'
      },
      period: {
        id: '2022 - Sekarang',
        en: '2022 - Now'
      },
      location: 'Cikarang Selatan, Kab.Bekasi, Indonesia',
      description: {
        id: 'IPK : -',
        en: 'GPA : -'
      },
      skills: ['Laravel', 'Basis Data', 'PHP', 'UI/UX Design', 'Web Development', 'Mobile App', 'Repair Computer', 'Insatalation Windows', 'etc']
    }
  ],
  certificates: [
    {
      title: {
        id: 'Magang Backend Developer',
        en: 'Backend Developer Internship'
      },
      company: {
        id: 'PT Dharma Polimetal',
        en: 'PT Dharma Polimetal'
      },
      location: 'Di Tempat',
      description: {
        id: 'Magang Backend Developer di PT Dharma Polimetal',
        en: 'Backend Developer Internship at PT Dharma Polimetal'
      },
      skills: ['Laravel', 'Dashboard', 'QR Code', 'Excel'],
      images: [magang1Images]
    },
    {
      title: {
        id: 'Kelas UI/UX Design',
        en: 'UI/UX Design Class'
      },
      company: {
        id: 'Yuksinibelajar Batch 1',
        en: 'Yuksinibelajar Batch 1'
      },
      location: 'Online',
      description: {
        id: 'Sertifikasi komprehensif dalam UX design process, user research, dan prototyping.',
        en: 'Comprehensive certification in UX design process, user research, and prototyping.'
      },
      skills: ['UI Design', 'UX Research', 'Prototyping', 'Usability Testing'],
      images: [UIUX1Image, UIUX2Image]
    },
    {
      title: {
        id: 'Belajar Dasar Git dengan GitHub',
        en: 'Learning how to use Git and GitHub'
      },
      company: {
        id: 'Dicoding',
        en: 'Dicoding'
      },
      location: 'Online',
      description: {
        id: 'Mempelajari cara menggunakan Git dan GitHub',
        en: 'Learning how to use Git and GitHub'
      },
      skills: ['Git', 'GitHub'],
      images: [Belajar1Images]
    },
    {
      title: {
        id: 'Belajar Dasar Pemrograman JavaScript',
        en: 'Learn the Basics of JavaScript Programming'
      },
      company: {
        id: 'Dicoding',
        en: 'Dicoding'
      },
      location: 'Online',
      description: {
        id: 'Mempelajari javascript berkerja pada sebuah web',
        en: 'Learning javascript working on a web'
      },
      skills: ['JavaScript', 'HTML', 'CSS'],
      images: [Belajar2Images]
    },
    {
      title: {
        id: 'Belajar Back-End Pemula dengan JavaScript',
        en: 'Learning Back-End Basics with JavaScript'
      },
      company: {
        id: 'Dicoding',
        en: 'Dicoding'
      },
      location: 'Online',
      description: {
        id: 'Mempelajari back-end dengan javascript berkerja pada sebuah web',
        en: 'Learning back-end with javascript working on a web'
      },
      skills: ['JavaScript', 'Node.js'],
      images: [Belajar3Images]
    },
    {
      title: {
        id: 'Belajar Dasar Pemrograman Web',
        en: 'Learn the Basics of Web Programming'
      },
      company: {
        id: 'Dicoding',
        en: 'Dicoding'
      },
      location: 'Online',
      description: {
        id: 'Mempelajari pemrograman web berkerja pada sebuah web',
        en: 'Learning web programming working on a web'
      },
      skills: ['HTML', 'CSS', 'JavaScript'],
      images: [Belajar4Images]
    },
    {
      title: {
        id: 'Belajar Fundamental Front-End Web Development',
        en: 'Learn the Basics of Front-End Web Development'
      },
      company: {
        id: 'Dicoding',
        en: 'Dicoding'
      },
      location: 'Online',
      description: {
        id: 'Mempelajari front-end dengan html, css, dan javascript berkerja pada sebuah web',
        en: 'Learning front-end with html, css, and javascript working on a web'
      },
      skills: ['HTML', 'CSS', 'JavaScript'],
      images: [Belajar5Images]
    },
    {
      title: {
        id: 'Belajar Membuat Front End Web untuk Pemula',
        en: 'Learn to Create Front End Web for Beginners'
      },
      company: {
        id: 'Dicoding',
        en: 'Dicoding'
      },
      location: 'Online',
      description: {
        id: 'Mempelajari front-end dengan html, css, dan javascript berkerja pada sebuah web',
        en: 'Learning front-end with html, css, and javascript working on a web'
      },
      skills: ['HTML', 'CSS', 'JavaScript'],
      images: [Belajar6Images]
    },
    {
      title: {
        id: 'Belajar Pengembangan Web Intermediate',
        en: 'Learn Web Development Intermediate'
      },
      company: {
        id: 'Dicoding',
        en: 'Dicoding'
      },
      location: 'Online',
      description: {
        id: 'Mempelajari front-end dengan html, css, dan javascript berkerja pada sebuah web',
        en: 'Learning front-end with html, css, and javascript working on a web'
      },
      skills: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Webpack'],
      images: [Belajar7Images]
    },
    {
      title: {
        id: 'Memulai Dasar Pemrograman Untuk Menajdi Pengembang Software',
        en: 'Starting Basic Programming for Becoming a Software Developer'
      },
      company: {
        id: 'Dicoding',
        en: 'Dicoding'
      },
      location: 'Online',
      description: {
        id: 'Mempelajari pemrograman web berkerja pada sebuah web',
        en: 'Learning web programming working on a web'
      },
      skills: ['HTML', 'CSS', 'JavaScript'],
      images: [Belajar9Images]
    },
    {
      title: {
        id: 'Pengenalan ke Logika Pemrograman',
        en: 'Introduction to Programming Logic'
      },
      company: {
        id: 'Dicoding',
        en: 'Dicoding'
      },
      location: 'Online',
      description: {
        id: 'Mempelajari logika pemrograman',
        en: 'Learning programming logic'
      },
      skills: ['Logic', 'Programming'],
      images: [Belajar10Images]
    },
    {
      title: {
        id: 'Finacial Literasi',
        en: 'Financial Literacy'
      },
      company: {
        id: 'Dicoding',
        en: 'Dicoding'
      },
      location: 'Online',
      description: {
        id: 'Mempelajari finacial literasi',
        en: 'Learning financial literacy'
      },
      skills: ['Financial', 'Literacy'],
      images: [Belajar11Images]
    },
    {
      title: {
        id: 'Sertifikat Bahasa Inggris dari TBI',
        en: 'English Sertificate from TBI'
      },
      company: {
        id: 'TBI & Dicoding',
        en: 'TBI & Dicoding'
      },
      location: 'Online',
      description: {
        id: 'Mempelajari bahasa inggris dengan tingkat keahlian B1',
        en: 'Learning English with B1 level'
      },
      skills: ['English'],
      images: [sertifikat1Images, sertifikat2Images]
    },
    {
      title: {
        id: 'Sertifikat Kelulusan dari Coding Camp 2025',
        en: 'Sertificate from Coding Camp 2025'
      },
      company: {
        id: 'Coding Camp powered by DBS Fondation',
        en: 'Coding Camp powered by DBS Fondation'
      },
      location: 'Online',
      description: {
        id: 'Sertifikat kelulusan dalam Coding Camp didukung oleh DBS Foundation 2025',
        en: 'Certificate of participation in Coding Camp supported by DBS Foundation 2025'
      },
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Deployment', 'Tailwind CSS', 'Git', 'GitHub', 'Vite', 'Radix UI', 'Shadcn UI', 'Figma'],
      images: [sertifikat3Images, sertifikat4Images, sertifikat5Images]
    },
  ],
  activities: [
    {
      title: {
        id: 'Workshop UI/UX Design di Himpunan TRPL',
        en: 'UI/UX Design Workshop at TRPL Community'
      },
      company: {
        id: 'Politeknik Meta Industri Cikarang',
        en: 'Politeknik Meta Industry Cikarang'
      },
      period: {
        id: 'Juli 2025 - Agustus 2025',
        en: 'July 2025 - August 2025'
      },
      location: 'Cikarang Selatan, Kab.Bekasi, Indonesia',
      description: {
        id: 'Mengajar workshop tentang design thinking dan user research untuk peserta pada himpunan TRPL dan mempelajari cara membuat linkedin.',
        en: 'Teaching workshop on design thinking and user research for participants at TRPL Community and learning how to make linkedin.'
      },
      skills: ['Teaching', 'Public Speaking', 'Design Thinking', 'User Research', 'Figma', 'LinkedIn']
    }
  ]
};

const getIcon = (type: string) => {
  switch (type) {
    case 'experience':
      return Briefcase;
    case 'education':
      return Award;
    case 'certificates':
      return Award;
    case 'activities':
      return Users;
    default:
      return Briefcase;
  }
};

interface ExperienceProps {
  language: 'id' | 'en';
}

export default function Experience({ language = 'id' }: ExperienceProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllSkills, setShowAllSkills] = useState<Record<number, boolean>>({});
  const t = translations[language];

  const sections = [
    { key: 'experience', label: t.tabs.experience, data: experienceData.experience },
    { key: 'education', label: t.tabs.education, data: experienceData.education },
    { key: 'certificates', label: t.tabs.certificates, data: experienceData.certificates },
    { key: 'activities', label: t.tabs.activities, data: experienceData.activities }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">{t.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-primary rounded-lg text-white mr-4">
                  {(() => {
                    const Icon = getIcon(section.key);
                    return <Icon className="h-6 w-6" />;
                  })()}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{section.label}</h3>
              </div>

              <div className={`${section.key === 'certificates' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}`}>
                {section.data.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline Line */}
                    {index < section.data.length - 1 && (
                      <div className="absolute left-6 top-16 w-px h-16 bg-gradient-primary opacity-30" />
                    )}
                    
                    <Card className="ml-4 p-6 glass hover:shadow-glow transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-2">
                            {item.title[language]}
                          </h4>
                          <div className="flex flex-col space-y-2 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-2" />
                              {item.company[language]}
                            </div>
                            {item.period && (
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                {item.period[language]}
                              </div>
                            )}
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {item.description[language]}
                      </p>

                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {item.skills.slice(0, showAllSkills[index] ? item.skills.length : 3).map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="bg-primary/10 text-primary"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {item.skills.length > 3 && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowAllSkills(prev => ({
                                  ...prev,
                                  [index]: !prev[index]
                                }));
                              }}
                              className="text-xs text-muted-foreground hover:text-primary transition-colors self-center"
                            >
                              {showAllSkills[index] ? 'Show less' : `+${item.skills.length - 3} more`}
                            </button>
                          )}
                        </div>
                      </div>
                      
                      {item.images && item.images.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-3">
                          {item.images.map((img, imgIndex) => (
                            <div 
                              key={imgIndex} 
                              className="w-[20%] flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedImage(img)}
                            >
                              <img 
                                src={img} 
                                alt={`${item.title} ${imgIndex + 1}`} 
                                className="w-full h-auto rounded-lg border border-border transition-transform hover:scale-[1.02]"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                        <DialogContent className="border-none shadow-none max-w-[70vw] max-h-[95vh]">
                          <DialogTitle className="sr-only">Certificate View</DialogTitle>
                          <DialogDescription className="p-0 m-0">
                            <div className="relative">
                              {selectedImage && (
                                <img 
                                  src={selectedImage} 
                                  alt="Certificate" 
                                  className="w-full h-auto max-h-[90vh] object-contain"
                                />
                              )}
                            </div>
                          </DialogDescription>
                        </DialogContent>
                      </Dialog>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}