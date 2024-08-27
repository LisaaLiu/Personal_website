import { useState } from 'react';
import NavBar from './components/Navbar';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <NavBar/>
        <Main/>
        <AboutMe/>
        <Work/>
        <Projects/>
        <Contact/>
      </div>
  )
}

export default App
