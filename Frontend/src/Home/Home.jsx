import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { Footer } from '../components/Footer'
import FreeBook from '../components/Freebook'

const Home = () => {
  return (
    <div>
       <Navbar />
      <Banner />
      <FreeBook />
      <Footer/>
    </div>
  )
}

export default Home
