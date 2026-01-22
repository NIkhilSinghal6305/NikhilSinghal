import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/about"
import Skills from "../pages/skills"
import Project from "../pages/project"
import Contact from "../pages/contact"

const Mainroutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/skills" element={<Skills />} ></Route>
        <Route path="/project" element={<Project />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
      </Routes>
  )
}

export default Mainroutes