import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import ContactForm from './components/ContactForm/ContactForm'


const App = () => {
  return (
    <div>
      <Routes>
<Route path="/" element={<Home />}/>
<Route path="/course" element={<Courses />}/>
<Route path="/signup" element={<Signup />}/>
<Route path="/contact" element={<ContactForm />}/>
    </Routes> 
      <div className='h-10'></div>
    </div>
  )
}

export default App
