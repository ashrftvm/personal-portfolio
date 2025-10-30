import { experienceData } from '../data/experience';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { Building2 } from 'lucide-react';

export function ExperienceV2() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            {experienceData.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-purple-500/30"
              >
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50"
                >
                  <Building2 className="w-3 h-3 text-white" />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-white mb-1">{job.company}</h3>
                        <p className="text-purple-300 mb-2">{job.role}</p>
                        <p className="text-gray-400">{job.period}</p>
                      </div>
                    </div>

                    {job.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            className="bg-white/10 border-white/20 text-gray-200 hover:bg-white/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {job.highlights && (
                      <ul className="space-y-2">
                        {job.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-gray-300 flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
