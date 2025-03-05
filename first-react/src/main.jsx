import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Maincontent from './Maincontent.jsx'
import Footer from './Footer.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Header />
  <Maincontent />
  <Footer />
  <App />
  </>
    
)
