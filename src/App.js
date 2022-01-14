import logo from './logo.svg';
import './App.css';
import Homepage from './components/Hompage';
import About from './components/About'
import Navbar from './components/Navbar';
import Links from './components/Links';
import Projects from './components/Projects';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';
import {Routes, Route} from "react-router-dom"
import {useRef, useEffect} from 'react'

function App() {
  const linkEl = useRef(null)
  const educationEl = useRef(null)
  const aboutEl = useRef(null)
  const projectsEl = useRef(null)
  const navEl = useRef(null)

  function goToSection(reference, e) {
    e.preventDefault()
    reference.current.scrollIntoView({behavior: 'smooth'})
  }
  
  return (
    <div>
      <div ref={navEl}>
        <Navbar goToSection={goToSection} linkEl={linkEl} educationEl={educationEl} aboutEl={aboutEl} projectsEl={projectsEl}/>
      </div>
      <div ref={aboutEl}>
        <About />
      </div>
      <div ref={projectsEl}>
        <Projects />
      </div>
      {/* <div ref={educationEl}>
        <ProfessionalExperience />
      </div> */}
      <div ref={educationEl}>
        <Education />
      </div>
      <div ref={linkEl}>
        <Links /> 
      </div>
    </div>
  );
}

export default App;

{/* <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
</Routes> */}