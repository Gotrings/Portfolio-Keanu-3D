import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

// Import images
import nutrieduImage from '@/assets/nutriedu.png';
import himtechImage from '@/assets/himtech.png';
import politeknikImage from '@/assets/politeknik.png';
import cafeImage from '@/assets/cafe.png';
import cinemaImage from '@/assets/cinefusion.png';

const translations = {
  id: {
    title: 'Karya & Proyek',
    filters: {
      all: 'Semua',
      uiux: 'UI/UX Design',
      web: 'Web Development',
      mobile: 'Mobile App'
    },
    viewProject: 'Lihat Proyek',
    viewCode: 'Lihat Kode'
  },
  en: {
    title: 'Works & Projects',
    filters: {
      all: 'All',
      uiux: 'UI/UX Design',
      web: 'Web Development',
      mobile: 'Mobile App'
    },
    viewProject: 'View Project',
    viewCode: 'View Code'
  }
};

// Mock project data
const projects = [
  {
    id: 1,
    title: 'NutriEdu',
    description: {
      id: 'Aplikasi Deteksi Status Gizi Anak dengan Fitur Edukasi dan Panduan Gizi Seimbang',
      en: 'Child Nutrition Status Detection Application with Balanced Nutrition Education and Guidance Features'
    },
    category: 'web',
    technologies: ['React TypeScript', 'Tailwind CSS', 'Leaflet.js', 'Radix UI', 'Shadcn UI', 'Vite'],
    image: nutrieduImage,
    liveUrl: 'https://capstone-dicoding-nutriedu.vercel.app/',
  },
  {
    id: 2,
    title: 'HIMTECH',
    description: {
      id: 'Website profile himpunan teknologi rekayasa perangkat lunak.',
      en: 'Creative portfolio website with 3D animations and responsive design to showcase artwork.'
    },
    category: 'web',
    technologies: ['React TypeScript', 'Next.js', 'Tailwind CSS', 'Leaflet.js', 'Radix UI', 'Shadcn UI', 'Vite'],
    image: himtechImage,
    liveUrl: 'https://himtech-2025.vercel.app/',
  },
  {
    id: 3,
    title: 'Prototype Profile Cafe',
    description: {
      id: 'Design prototype profile cafe dengan desain yang modern dan responsif.',
      en: 'Design prototype profile cafe with modern and responsive design.'
    },
    category: 'uiux',
    technologies: ['Figma', 'Photoshop', 'Canva'],
    image: cafeImage,
    liveUrl: 'https://www.figma.com/design/NvCiLbyPLEGo692FBsupSv/Cafe-Apps?node-id=1102-2&t=MbOImQPt5SRzLEci-1',
  },
  {
    id: 4,
    title: 'Politeknik Meta Apps Mobile Design',
    description: {
      id: 'Design prototype aplikasi LMS yang memudahkan akses LMS langsung dari perangkat seluler.',
      en: 'Design prototype of LMS application that makes it easier to access LMS directly from mobile devices.'
    },
    category: 'uiux',
    technologies: ['Figma', 'Photoshop', 'Canva'],
    image: politeknikImage,
    liveUrl: 'https://www.figma.com/design/rkSXZXEtDOUOUarNBuBqhT/Politeknik-Meta?node-id=5-2509&t=zhC4TSiNsT8uuJDu-1',
  },
  {
    id: 5,
    title: 'Prototype Cinefusion',
    description: {
      id: 'Aplikasi streaming film dengan desain yang modern dan responsif.',
      en: 'Streaming movie application with modern and responsive design.'
    },
    category: 'uiux',
    technologies: ['Figma', 'Photoshop', 'Canva'],
    image: cinemaImage,
    liveUrl: 'https://www.figma.com/design/Hoa5UkBI2sgoUnwWJ1ODK0/Cinefusion?node-id=2-2&t=KMFwsFMnRUMSYTtT-1',
  }
];

interface ProjectsProps {
  language: 'id' | 'en';
}

export default function Projects({ language = 'id' }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAllTech, setShowAllTech] = useState<Record<number, boolean>>({});
  const t = translations[language];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const filters = [
    { key: 'all', label: t.filters.all },
    { key: 'uiux', label: t.filters.uiux },
    { key: 'web', label: t.filters.web },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
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

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'gradient-primary text-white shadow-glow'
                  : 'hover:border-primary'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <Card className="overflow-hidden glass hover:shadow-glow transition-all duration-300 h-full">
                  {/* Project Image */}
                  <div className="relative h-48 bg-white overflow-hidden flex items-center justify-center">
                    <div className="relative w-[75%] h-[75%] flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-black/0" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description[language]}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, showAllTech[project.id] ? project.technologies.length : 3).map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowAllTech(prev => ({
                              ...prev,
                              [project.id]: !prev[project.id]
                            }));
                          }}
                          className="text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          {showAllTech[project.id] ? 'Show less' : `+${project.technologies.length - 3} more`}
                        </button>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="flex">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full hover:border-primary group/btn"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:text-primary" />
                          {t.viewProject}
                        </Button>
                      </a>
                    </div>
                  </div>
                  </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}