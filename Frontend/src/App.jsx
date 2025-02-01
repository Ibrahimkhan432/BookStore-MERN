import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from 'react-router'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import ContactForm from './components/ContactForm/ContactForm'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


const App = () => {
    const [authUser, setAuthUser] = useAuth();
  return (
    <div>
      <Routes>
<Route path="/" element={<Home />}/>
<Route path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}/>
<Route path="/signup" element={<Signup />}/>
<Route path="/contact" element={<ContactForm />}/>
    </Routes> 
    <Toaster />
    </div>
  )
}

export default App
