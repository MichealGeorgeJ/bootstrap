import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Bio from './components/Bio'
import Resume from './components/Resume'
import Certificate from './components/Certificate'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <Navbar id='nav-bar' />
      <About id="about" />
      <Bio id="bio" />
      <Skills id="skills" />
      <Resume id="resume"  />
      <Projects id="projects"/>
      <Certificate id="certificate" />
      
      
      <Contact id="contact"  />
      <Footer id="footer" />
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default App