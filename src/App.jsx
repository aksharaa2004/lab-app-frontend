import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Add from './Components/Add'
import ViewLogin from './Components/ViewLogin'
import NavBar from './Components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/ViewLogin' element={<ViewLogin/>}/>
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
