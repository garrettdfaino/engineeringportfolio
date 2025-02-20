import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Award, 
  Target, 
  Lightbulb, 
  Wrench, 
  Zap 
} from 'lucide-react';
import { projectData } from '../data/projects';
import type { ProjectId } from '../data/projects';

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id as ProjectId] : null;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen tech-background relative overflow-hidden">
      {/* Animated dots */}
      <div className="tech-dot"></div>
      <div className="tech-dot"></div>
      <div className="tech-dot"></div>
      <div className="tech-dot"></div>
      <div className="tech-dot"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="mb-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="h-[400px] relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent h-24">
              <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <div className="flex items-center gap-2 text-blue-600 mb-6">
                  <Zap size={24} />
                  <h2 className="text-2xl font-semibold">Impact & Takeaways</h2>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 text-gray-600">
                  <p className="leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-2 text-blue-600 mb-6">
                  <Target size={24} />
                  <h2 className="text-2xl font-semibold">Project Overview</h2>
                </div>
                <div className="text-gray-600 leading-relaxed space-y-6">
                  {Array.isArray(project.overview) ? (
                    project.overview.map((paragraph, index) => (
                      typeof paragraph === 'string' ? (
                        <p key={index}>{paragraph}</p>
                      ) : (
                        React.cloneElement(paragraph, { key: index })
                      )
                    ))
                  ) : (
                    <p>{project.overview}</p>
                  )}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-2 text-blue-600 mb-6">
                  <Lightbulb size={24} />
                  <h2 className="text-2xl font-semibold">Key Contributions</h2>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {project.contributionsSummary}
                  </p>
                </div>
                <div className="space-y-6">
                  {Array.isArray(project.contributions) && project.contributions.map((contribution, index) => (
                    typeof contribution === 'string' ? (
                      <div key={index} className="text-gray-600">
                        <ul className="list-disc list-inside">
                          <li>{contribution}</li>
                        </ul>
                      </div>
                    ) : contribution.main ? (
                      <div key={index} className="space-y-2">
                        <ul className="list-disc list-inside">
                          <li className="font-semibold text-gray-600">
                            {contribution.main}
                            <ul className="list-disc list-inside space-y-1 text-gray-600 ml-6 font-normal">
                              {contribution.sub.map((item, subIndex) => (
                                <li key={subIndex}>{item}</li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      React.cloneElement(contribution, { key: index })
                    )
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-2 text-blue-600 mb-6">
                  <Award size={24} />
                  <h2 className="text-2xl font-semibold">Project Results</h2>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {project.resultsSummary}
                  </p>
                </div>
                <div className="space-y-6">
                  {Array.isArray(project.results) ? (
                    project.results.map((result, index) => (
                      typeof result === 'string' ? (
                        <div key={index} className="text-gray-600">
                          <ul className="list-disc list-inside">
                            <li>{result}</li>
                          </ul>
                        </div>
                      ) : result.main ? (
                        <div key={index} className="space-y-2">
                          <ul className="list-disc list-inside">
                            <li className="font-semibold text-gray-600">
                              {result.main}
                              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-6 font-normal">
                                {result.sub.map((item, subIndex) => (
                                  <li key={subIndex}>{item}</li>
                                ))}
                              </ul>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        React.cloneElement(result, { key: index })
                      )
                    ))
                  ) : (
                    React.cloneElement(project.results, { key: 'results' })
                  )}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 text-blue-600 mb-6">
                  <Wrench size={24} />
                  <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;