import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import Home from './components/Home'
import About from './components/About'
import Qualification from './components/Qualification'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Research from './components/Research'
import Gallery from './components/Gallery'

function Router() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Layouts />} >
                    <Route exact path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="qualification" element={<Qualification/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="certifications" element={<Certifications/>} />
                    <Route path="research&experience" element={<Research/>} />
                    <Route path="gallery" element={<Gallery/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
