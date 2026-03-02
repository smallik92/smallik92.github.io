import { publications } from '../data/publications'

const categories = [
  { key: 'journal', label: 'Journal Articles' },
  { key: 'preprints', label: 'Preprints' },
  { key: 'conference', label: 'Conference Papers & Posters' },
  { key: 'thesis', label: 'Thesis' },
]

function Publications() {
  return (
    <section id="publications" className="py-16 px-8 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Publications</h2>
        <div className="flex flex-col gap-10">
          {categories.map(({ key, label }) => (
            <div key={key}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-muted)] mb-4">{label}</h3>
              <ul className="flex flex-col gap-4">
                {publications[key].map((pub, i) => (
                  <li key={i} className="pl-4 border-l-2 border-gray-200 dark:border-slate-700">
                    {pub.url
                      ? <a href={pub.url} target="_blank" rel="noreferrer"
                           className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors">
                          {pub.title}
                        </a>
                      : <span className="text-sm font-medium">{pub.title}</span>
                    }
                    <p className="text-xs text-[var(--color-muted)] mt-1">{pub.venue} · {pub.year}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications