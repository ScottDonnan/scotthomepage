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

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <About />
      <Projects />
      <ProfessionalExperience />
      <Education />
      <Links /> 
    </div>
  );
}

export default App;

{/* <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
</Routes> */}