import { GraduationCap, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export function EducationV2() {
  const education = [
    {
      school: 'Liverpool John Moores University',
      degree: 'MBA, Technology Business Management',
      period: 'July 2023',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      school: 'University of Kerala',
      degree: 'BTech, Computer Science & Engineering',
      period: 'April 2017',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 relative overflow-hidden group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} mb-4 shadow-lg`}>
                    {index === 0 ? (
                      <GraduationCap className="w-8 h-8 text-white" />
                    ) : (
                      <BookOpen className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <h3 className="mb-2 text-white">{edu.school}</h3>
                  <p className="text-gray-300 mb-2">{edu.degree}</p>
                  <p className="text-gray-400">{edu.period}</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/10 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white/10 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
