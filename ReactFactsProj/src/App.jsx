import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbars from './components/Navbars'
import MainCom from './components/MainCom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbars />
      <MainCom />
    </>
  )
}

export default App
