import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvier from './context/AuthProvider.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvier>
    <App />
  </AuthProvier>
  </BrowserRouter>
  )
