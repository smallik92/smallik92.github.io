const education = [
  {
    degree: 'Ph.D.',
    field: 'Electrical & Systems Engineering',
    institution: 'Washington University in St. Louis',
    years: '2016 – 2021',
  },
  {
    degree: 'M.S.',
    field: 'Electrical & Systems Engineering',
    institution: 'Washington University in St. Louis',
    years: '2016 – 2018',
  },
  {
    degree: 'B.E.',
    field: 'Electrical Engineering',
    institution: 'Jadavpur University',
    years: '2011 – 2015',
  },
]

const skills = [
  { 
    category: 'AI Systems & Machine Learning', 
    items: [
      'Multi-Agent Architectures',
      'LLMs / Foundation Models',
      'Evaluation of AI Agents',
      'Deep Learning',
      'Time-Series Forecasting',
      'ModelOps'
    ] 
  },
  { 
    category: 'Programming Languages & Tools', 
    items: [
      'Python',
      'CI/CD',
      'Git',
      'MATLAB'
    ] 
  },
  {
    'category': 'ML Frameworks & Libraries',
    'items': [
      'PyTorch',
      'huggingface',
      'transformers',
      'LangGraph',
      'Scikit-learn',
    ]
  }
]
function About() {
  return (
    <section id="about" className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>About</h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-6 text-[var(--color-primary)]">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                <h4 className="text-2xl font-bold mb-1">{edu.degree}</h4>
                <p className="text-sm text-[var(--color-muted)] mb-1">{edu.field}</p>
                <p className="text-sm font-medium mb-1">{edu.institution}</p>
                <p className="text-sm text-[var(--color-muted)]">{edu.years}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-[var(--color-primary)]">Skills</h3>
          <div className="flex flex-col gap-6">
            {skills.map((group, i) => (
              <div key={i}>
                <p className="text-sm font-semibold text-[var(--color-muted)] mb-2">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span
                      key={j}
                      className="text-sm px-3 py-1 rounded-full bg-blue-50 dark:bg-slate-800 text-[var(--color-primary)] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
