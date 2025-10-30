import { Award, Trophy, Star, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function AwardsV2() {
  const awards = [
    {
      title: 'Exemplary Performance',
      year: '2023',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Google Developer Groups',
      year: '',
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cybersecurity Innovation & Research',
      year: '',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const hobbies = [
    { name: 'Travelling', icon: '✈️' },
    { name: 'Food', icon: '🍜' },
    { name: 'Technologies', icon: '💻' },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Awards & Interests
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 text-center relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${award.color} mb-4 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="mb-1 text-white">{award.title}</h3>
                  {award.year && <p className="text-gray-400">{award.year}</p>}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Heart className="w-6 h-6 text-pink-400" />
                <h3 className="text-white">Interests & Hobbies</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-gray-200"
                  >
                    <span className="mr-2">{hobby.icon}</span>
                    {hobby.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
