import { Briefcase, Award, Globe2 } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: '10+ Years',
      description: 'Professional Experience',
    },
    {
      icon: Award,
      title: 'Multiple Awards',
      description: 'Including Exemplary Performance 2023',
    },
    {
      icon: Globe2,
      title: '5 Languages',
      description: 'English, Malayalam, Arabic, Tamil, Hindi',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">About Me</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <p className="text-gray-700 mb-6">
              I'm a Senior Software Engineer with over a decade of experience building 
              scalable web applications and leading development teams. My expertise spans 
              both front-end and back-end technologies, with a strong focus on modern 
              JavaScript frameworks and cloud infrastructure.
            </p>
            <p className="text-gray-700 mb-6">
              Throughout my career, I've contributed to agile feature teams, championed 
              code quality through comprehensive testing, and architected solutions that 
              prioritize system performance and maintainability. I'm passionate about 
              technical design, problem-solving, and mentoring teams to deliver exceptional 
              software.
            </p>
            <p className="text-gray-700">
              I hold an MBA in Technology Business Management from Liverpool John Moores 
              University and a BTech in Computer Science & Engineering from the University 
              of Kerala.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
