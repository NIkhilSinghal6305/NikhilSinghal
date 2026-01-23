import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Skills from "../pages/Skills"
import Project from "../pages/Project"
import Contact from "../pages/Contact"

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