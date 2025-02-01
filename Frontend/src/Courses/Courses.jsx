import React, { useEffect } from 'react'
import Course from '../components/Course'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'

const Courses = () => {

  return (
    <div>
            <Navbar/>
            <div className='min-h-5'>
            <Course/>
            </div>
            <Footer/>
    </div>
  )
}

export default Courses
