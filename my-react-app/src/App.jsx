import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Header from './Components/header'
import Slider from './Components/slider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Packages from './pages/packages'
import Hotel from './pages/hotels'
import Dress from './pages/dress'
import Decoration from './pages/decorations'
import Cake from './pages/cakes'
import Makeup from './pages/makeup'
import Music from './pages/music'
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
      <Route path="/hotels" element={<Hotel/>}/>
      <Route path='/dresses' element={<Dress/>}/>
      <Route path='/decorations' element={<Decoration/>}/>
      <Route path='/cake' element={<Cake/>}/>
      <Route path='/makeup' element={<Makeup/>}/>
      <Route path='/music' element={<Music/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
