import { useState } from 'react'
import { experience } from '../data/experience'

function Experience() {
  const [selectedTag, setSelectedTag] = useState(null)

  return (
    <section id="experience" className="py-16 px-8 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Experience</h2>

        <div className="flex flex-col gap-12">
          {experience.map((entry, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-[var(--color-primary)]">

              <div className="mb-3">
                <h3 className="text-xl font-bold">{entry.institution}</h3>
                <p className="text-[var(--color-primary)] font-semibold">{entry.role}</p>
                {entry.progression && (
                  <p className="text-xs text-[var(--color-muted)] mt-1 italic">{entry.progression}</p>
                )}
                <p className="text-sm text-[var(--color-muted)] mt-1">{entry.tenure}</p>
              </div>

              {entry.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {entry.tags.map((tag, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      className={`text-xs px-2 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                        selectedTag === tag
                          ? 'bg-[var(--color-accent)] text-white'
                          : 'bg-purple-50 dark:bg-slate-800 text-[var(--color-accent)] hover:bg-purple-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}

              {entry.bulletGroups
                ? entry.bulletGroups.map((group, i) => {
                    const isActive = !selectedTag || selectedTag === group.category
                    return (
                      <div
                        key={i}
                        className={`mb-4 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-20'}`}
                      >
                        <h4 className={`text-sm font-bold uppercase tracking-wide mb-2 ${
                          selectedTag === group.category
                            ? 'text-[var(--color-accent)]'
                            : 'text-[var(--color-muted)]'
                        }`}>
                          {group.category}
                        </h4>
                        <ul className="flex flex-col gap-2 list-disc pl-4">
                          {group.bullets.map((bullet, j) => (
                            <li key={j} className="text-sm leading-relaxed">{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  })
                : (
                  <ul className="flex flex-col gap-2 list-disc pl-4">
                    {entry.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                )
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience