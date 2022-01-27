import './App.css';
import About from './components/About'
import Navbar from './components/Navbar';
import Links from './components/Links';
import Projects from './components/Projects';
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
    <div id="test">
      <div ref={navEl}>
        <Navbar goToSection={goToSection} linkEl={linkEl} educationEl={educationEl} aboutEl={aboutEl} projectsEl={projectsEl} screenWidth={screenWidth}/>
      </div>
      <div className="container" id="about-container" ref={aboutEl}>
        <About screenWidth={screenWidth}/>
      </div>
      <div className="container" ref={projectsEl}>
        <Projects screenWidth={screenWidth}/>
      </div>
      <div className="container" ref={linkEl}>
        <Links screenWidth={screenWidth}/> 
      </div>
      <button id="to-top-button" href="#" onClick={(e) => goToSection(navEl, e)}>BACK TO TOP</button>
    </div>
  );
}

export default App;