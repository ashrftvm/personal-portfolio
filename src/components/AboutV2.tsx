import { Briefcase, Award, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutV2() {
  const highlights = [
    {
      icon: Briefcase,
      title: '10+ Years',
      description: 'Professional Experience',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Multiple Awards',
      description: 'Including Exemplary Performance 2023',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe2,
      title: '5 Languages',
      description: 'English, Malayalam, Arabic, Tamil, Hindi',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 mb-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-gray-300 mb-6">
                I'm a Senior Software Engineer with over a decade of experience building 
                scalable web applications and leading development teams. My expertise spans 
                both front-end and back-end technologies, with a strong focus on modern 
                JavaScript frameworks and cloud infrastructure.
              </p>
              <p className="text-gray-300 mb-6">
                Throughout my career, I've contributed to agile feature teams, championed 
                code quality through comprehensive testing, and architected solutions that 
                prioritize system performance and maintainability. I'm passionate about 
                technical design, problem-solving, and mentoring teams to deliver exceptional 
                software.
              </p>
              <p className="text-gray-300">
                I hold an MBA in Technology Business Management from Liverpool John Moores 
                University and a BTech in Computer Science & Engineering from the University 
                of Kerala.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 text-center relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${highlight.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-2 text-white">{highlight.title}</h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
