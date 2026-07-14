import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Add from './Components/Add'

import ViewLog from './Components/ViewLog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Add/>
      <ViewLog/>
    </>
  )
}

export default App
