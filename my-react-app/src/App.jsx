import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Header from './Components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Packages from './pages/packages'
//import Header from './Components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/packages' element={<Packages/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
