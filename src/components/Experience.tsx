import { experienceData } from '../data/experience';
import { Badge } from './ui/badge';

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16">Experience</h2>

          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="mb-1">{job.company}</h3>
                      <p className="text-gray-600 mb-2">{job.role}</p>
                      <p className="text-gray-500">{job.period}</p>
                    </div>
                  </div>

                  {job.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {job.highlights && (
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-gray-700 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
