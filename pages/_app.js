import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidevar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidevar isOpen={isOpen} toggle={toggle} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
