import { Badge } from './ui/badge';
import { skillsData } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
