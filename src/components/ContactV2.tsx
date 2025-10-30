import { Mail, Phone, Globe, Linkedin, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export function ContactV2() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@asharafali.com',
      href: 'mailto:hello@asharafali.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+971 52 749 0744',
      href: 'tel:+971527490744',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'asharafali.com',
      href: 'https://asharafali.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ashrftvm',
      href: 'https://linkedin.com/in/ashrftvm',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              I'm available for consulting opportunities and would love to discuss how 
              I can help with your next project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl p-8 mb-8 border border-purple-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </motion.div>
                <h3 className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Open for Consulting
                </h3>
              </div>
              <p className="text-center text-gray-300 mb-6">
                Whether you need help with architecture design, full-stack development, 
                or team leadership, I bring over 10 years of experience to help you succeed.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-4 hover:bg-white/10 transition-all group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-gray-400 text-sm">{method.label}</p>
                    <p className="text-white">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              asChild
              className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 shadow-lg shadow-purple-500/50"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:hello@asharafali.com"
              >
                <Send className="w-5 h-5" />
                Send a Message
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
