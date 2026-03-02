import { projects } from '../data/project'
import { FiGithub } from 'react-icons/fi'

function Projects() {
  return (
    <section id="projects" className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={project.placeholder ? 'col-span-full' : ''}>
              {project.placeholder ? (
                <div className="p-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-slate-700 flex items-center justify-center min-h-40">
                  <p className="text-[var(--color-muted)] text-sm italic">A new project currently in progress.</p>
                </div>
              ) : (
                <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-700 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer"
                         className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">
                        <FiGithub size={18} />
                      </a>
                    )}
                  </div>
                  {project.duration && (
                    <p className="text-xs text-gray-500 dark:text-slate-400">{project.duration}</p>
                  )}
                  <ul className="flex flex-col gap-2 list-disc pl-4">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-slate-800 text-[var(--color-primary)] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects