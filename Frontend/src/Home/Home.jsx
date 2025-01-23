import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Facebook from '../components/Facebook'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div>
       <Navbar />
      <Banner />
      <Facebook />
      <Footer/>
    </div>
  )
}

export default Home
