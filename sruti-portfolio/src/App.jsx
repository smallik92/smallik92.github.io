import { useState, useEffect } from 'react'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
// import Research from './components/Research'
import Projects from './components/Projects'
import Publications from './components/Publications'
// import PhotoStrip from './components/PhotoStrip'
import Contact from './components/Contact'



function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
  <div style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>

    <Navbar isDark={isDark} setIsDark={setIsDark} />
    <Hero />
    <About />
    <Experience />
    {/* <Research /> */}
    <Projects />
    <Publications />
    {/* <PhotoStrip /> */}
    <Contact />
  </div>
)

}

export default App
