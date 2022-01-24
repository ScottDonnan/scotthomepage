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
import {useRef, useEffect, useState} from 'react'

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const linkEl = useRef(null)
  const educationEl = useRef(null)
  const aboutEl = useRef(null)
  const projectsEl = useRef(null)
  const navEl = useRef(null)

  useEffect(() => {
    function handleResize() {
        setScreenWidth(window.innerWidth)
    }
      
    window.addEventListener('resize', handleResize)
  })
  
  function goToSection(reference, e) {
    e.preventDefault()
    reference.current.scrollIntoView({behavior: 'smooth'})
  }
  
  return (
    <div>
      <div ref={navEl}>
        <Navbar goToSection={goToSection} linkEl={linkEl} educationEl={educationEl} aboutEl={aboutEl} projectsEl={projectsEl} screenWidth={screenWidth}/>
      </div>
      <div ref={aboutEl}>
        <About screenWidth={screenWidth}/>
      </div>
      <div ref={projectsEl}>
        <Projects screenWidth={screenWidth}/>
      </div>
      {/* <div ref={educationEl}>
        <ProfessionalExperience />
      </div> */}
      {/* <div ref={educationEl}>
        <Education />
      </div> */}
      <div ref={linkEl}>
        <Links screenWidth={screenWidth}/> 
      </div>
      <a href="#" onClick={(e) => goToSection(navEl, e)}>BACK TO TOP</a>
    </div>
  );
}

export default App;

{/* <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
</Routes> */}