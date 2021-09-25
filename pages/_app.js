import { Provider } from 'next-auth/client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidevar from '../components/Sidebar'
import '../styles/globals.css'
import '../components/Navbar/Navbar.css'

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Provider session={pageProps.session}>
      <Navbar toggle={toggle} />
      <Sidevar isOpen={isOpen} toggle={toggle} />
      <Component {...pageProps} />
    </Provider>
  )
}

//fnkxxbmrsbvwzbmo
export default MyApp
