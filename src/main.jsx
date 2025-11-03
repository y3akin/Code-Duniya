import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Category from './Components/Category'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Banner/>
    <Category />
  </StrictMode>,
)
