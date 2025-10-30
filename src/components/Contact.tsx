import { Mail, Phone, Globe, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@asharafali.com',
      href: 'mailto:hello@asharafali.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+971 52 749 0744',
      href: 'tel:+971527490744',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'asharafali.com',
      href: 'https://asharafali.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ashrftvm',
      href: 'https://linkedin.com/in/ashrftvm',
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Let's Work Together</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              I'm available for consulting opportunities and would love to discuss how 
              I can help with your next project.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MessageCircle className="text-blue-600" size={24} />
              <h3 className="text-blue-900">Open for Consulting</h3>
            </div>
            <p className="text-center text-gray-700 mb-6">
              Whether you need help with architecture design, full-stack development, 
              or team leadership, I bring over 10 years of experience to help you succeed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500">{method.label}</p>
                    <p className="text-gray-900">{method.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <a href="mailto:hello@asharafali.com">Send a Message</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
