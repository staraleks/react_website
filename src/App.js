import GlobalStyle from "./globalStyles"
import {ThemeProvider} from "styled-components"
import {lightTheme} from "./components/Theme"
import {darkTheme} from "./components/Theme"
import { HashRouter, Route, useLocation, Routes , Router} from "react-router-dom"
import { AnimatePresence } from "framer-motion"

//components
import Main from './components/Main';
import AboutPage from "./components/AboutPage"
import MySkillsPage from "./components/MySkillsPage"
import Projects from "./components/Projects"
import SoundBar from "./components/SoundBar"
import ContactPage from "./components/ContactPage"

function App() {
  const location = useLocation()
  return (
    <div>
    <GlobalStyle/>
    <ThemeProvider theme={lightTheme}>
    <SoundBar />

  <AnimatePresence exitBeforeEnter>
  <Routes location={location} key={location.pathname}>
    <Route exact path="/" element={<Main />} />
    <Route exact path="/about" element={<AboutPage />} />
    <Route exact path="/contact" element={<ContactPage />} />
    <Route exact path="/skills" element={<MySkillsPage />} />
    <Route exact path="/projects" element={< Projects />} />
  </Routes>
  </AnimatePresence>
  </ThemeProvider>
</div>
    
  )
    
}

export default App

