import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Add from './Components/Add'
import ViewLogin from './Components/ViewLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Add/>
      <ViewLogin/>
    </>
  )
}

export default App
