import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
            <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
      <main>
        <h1>Reason I am Excited to learn React</h1>
        <ol>
          <li>React is a popular library</li>
          <li>React is easy to learn</li>
        </ol>
      </main>
      <footer>
        <small>© 2024 Ziroll development. All rights reserved.</small>
      </footer>
    </>
  )
}

export default App
