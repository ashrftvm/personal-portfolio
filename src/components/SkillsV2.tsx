import { motion } from 'motion/react';
import { skillsData } from '../data/skills';
import { Code, Server, Database, Wrench, Users } from 'lucide-react';

export function SkillsV2() {
  const categoryIcons: Record<string, any> = {
    'Front End Development': Code,
    'Back End Development': Server,
    'Data & Infrastructure': Database,
    'DevOps & Tools': Wrench,
    'Soft Skills': Users,
  };

  const categoryColors: Record<string, string> = {
    'Front End Development': 'from-blue-500 to-cyan-500',
    'Back End Development': 'from-green-500 to-emerald-500',
    'Data & Infrastructure': 'from-orange-500 to-red-500',
    'DevOps & Tools': 'from-purple-500 to-pink-500',
    'Soft Skills': 'from-yellow-500 to-orange-500',
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillsData.map((category, index) => {
              const Icon = categoryIcons[category.category] || Code;
              const colorClass = categoryColors[category.category] || 'from-blue-500 to-purple-500';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-white">{category.category}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`px-3 py-1 rounded-full bg-gradient-to-r ${colorClass} bg-opacity-10 border border-white/20 text-gray-200 text-sm`}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
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
