import { motion } from 'framer-motion';

const translations = {
  id: {
    title: 'Tentang Saya',
    intro: 'Perkenalkan saya Keanu Dustin Kemala, Seorang <span class="font-medium text-[#4F75FF]">Front-End Developer & UI/UX Designer</span> yang sedang menempuh pendidikan di Politeknik Meta Industri Cikarang, jurusan Teknologi Rekayasa Perangkat Lunak (lulus 2026). Berpengalaman dalam pengembangan frontend dan desain antarmuka yang responsif.',
    intro2: 'Pernah mengikuti <span class="font-medium text-[#00CCDD]">Coding Camp powered by DBS Foundation 2025</span> oleh Dicoding. Ahli dalam pembuatan <span class="font-medium text-[#7CF5FF]">website profile</span> perusahaan dan aplikasi web modern dengan fokus pada pengalaman pengguna.',
    intro3: 'Sering dipercaya sebagai <span class="font-medium text-[#4F75FF]">projek manajer</span> atau <span class="font-medium text-[#00CCDD]">ketua tim</span>, dengan keahlian dalam <span class="font-medium text-[#7CF5FF]">manajemen tim</span> dan koordinasi proyek. Percaya pada desain yang bersih, kode yang efisien, dan kolaborasi tim yang solid.',
  },
  en: {
    title: 'About Me',
    intro: 'Hello, I\'m Keanu Dustin Kemala, a <span class="font-medium text-[#4F75FF]">Front-End Developer & UI/UX Designer</span> currently studying at Polytechnic Meta Industry Cikarang, majoring in Software Engineering Technology (grad. 2026). Passionate about creating responsive interfaces and seamless user experiences.',
    intro2: 'Participant of <span class="font-medium text-[#00CCDD]">Coding Camp powered by DBS Foundation 2025</span> by Dicoding. Specialized in building company <span class="font-medium text-[#7CF5FF]">website profile</span> and modern web applications with a focus on performance and accessibility.',
    intro3: 'Frequently entrusted as <span class="font-medium text-[#4F75FF]">project manager</span> or <span class="font-medium text-[#00CCDD]">team leader</span>, with proven skills in <span class="font-medium text-[#7CF5FF]">team coordination</span> and project management. Believes in clean design, efficient code, and collaborative teamwork.',
  },
};

interface AboutProps {
  language: 'id' | 'en';
}

export default function About({ language = 'id' }: AboutProps) {
  const t = translations[language];

  const createMarkup = (html: string) => {
    return { __html: html };
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-4xl font-bold gradient-text mb-4">{t.title}</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>
        </motion.div>

        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div 
                className="text-lg text-muted-foreground leading-relaxed text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                dangerouslySetInnerHTML={createMarkup(t.intro)}
              />
              <motion.div 
                className="text-lg text-muted-foreground leading-relaxed text-justify mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                dangerouslySetInnerHTML={createMarkup(t.intro2)}
              />
              <motion.div 
                className="text-lg text-muted-foreground leading-relaxed text-justify mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                dangerouslySetInnerHTML={createMarkup(t.intro3)}
              />
            </motion.div>
          </div>

          <motion.div
            className="relative w-72 h-72 lg:w-96 lg:h-96 xl:w-[25rem] xl:h-[25rem] flex-shrink-0 lg:ml-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Aurora effect ring */}
            <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-aurora">
              <div className="relative w-full h-full rounded-full bg-background p-1">
                {/* Profile image */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                  <img
                    src="/src/assets/keanu.png"
                    alt="Keanu Dustin Kemala"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
