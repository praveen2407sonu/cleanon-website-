import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Projects from "./pages/Projects";

function App() {
  return (
   <BrowserRouter>
    <TopBar/>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
    </Routes>
  

    </BrowserRouter>
  )
}

export default App