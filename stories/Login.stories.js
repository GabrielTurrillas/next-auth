import { useState } from 'react'
import Login from '../pages/login'
import { Default as Navbar } from '../components/Navbar/Navbar.stories'
import { Default as Sidevar } from '../components/Sidebar/'

export default {
  title: 'Pages/Login'
}

export const LoginPage = () => {
  return (
    <>
      <Navbar />
      <Login />
    </>
  )
}



