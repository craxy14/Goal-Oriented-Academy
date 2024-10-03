import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Faqs from './Components/FAQs.jsx'


function App() {

  return (
    <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="about">About</Link></li>
      <li><Link to="contact">Contact</Link></li>
      <li><Link to="faqs">FAQs</Link></li>
    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<Faqs />} />
    </Routes>
    </>
  )
}

export default App
