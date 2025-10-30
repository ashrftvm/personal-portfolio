import { Award, Trophy } from 'lucide-react';
import { Badge } from './ui/badge';

export function Awards() {
  const awards = [
    {
      title: 'Exemplary Performance',
      year: '2023',
      icon: Trophy,
    },
    {
      title: 'Google Developer Groups',
      year: '',
      icon: Award,
    },
    {
      title: 'Cybersecurity Innovation & Research',
      year: '',
      icon: Award,
    },
  ];

  const hobbies = ['Travelling', 'Food', 'Technologies'];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16">Awards & Interests</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-1">{award.title}</h3>
                  {award.year && <p className="text-gray-500">{award.year}</p>}
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <h3 className="mb-4">Interests & Hobbies</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {hobbies.map((hobby, index) => (
                <Badge key={index} variant="secondary">
                  {hobby}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
