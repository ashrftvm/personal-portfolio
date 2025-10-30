import { GraduationCap } from 'lucide-react';

export function Education() {
  const education = [
    {
      school: 'Liverpool John Moores University',
      degree: 'MBA, Technology Business Management',
      period: 'July 2023',
    },
    {
      school: 'University of Kerala',
      degree: 'BTech, Computer Science & Engineering',
      period: 'April 2017',
    },
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16">Education</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <GraduationCap size={24} />
                </div>
                <h3 className="mb-2">{edu.school}</h3>
                <p className="text-gray-700 mb-2">{edu.degree}</p>
                <p className="text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
