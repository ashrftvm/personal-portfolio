import { Mail, Phone, Globe, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-gray-900 mb-4">Asharaf Ali</h1>
          <p className="text-gray-600 text-xl mb-8">Senior Software Engineer</p>
          
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Building scalable web applications with modern technologies. 
            Specializing in full-stack development, system architecture, and agile methodologies.
            <span className="block mt-2">
              <strong>Available for consulting opportunities.</strong>
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <a
              href="tel:+971527490744"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Phone size={18} />
              <span>+971 52 749 0744</span>
            </a>
            <a
              href="mailto:hello@asharafali.com"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail size={18} />
              <span>hello@asharafali.com</span>
            </a>
            <a
              href="https://asharafali.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Globe size={18} />
              <span>asharafali.com</span>
            </a>
            <a
              href="https://linkedin.com/in/ashrftvm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

          <Button onClick={scrollToContact} size="lg" className="gap-2">
            Get in Touch
            <ArrowDown size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
