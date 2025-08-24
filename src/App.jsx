// App.js
import './App.css'
import './index.css'

import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

// Components
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Rooms from './Components/Rooms/Rooms'
import Login from './Components/Login/Login'

function Layout() {
  return (
    <>
      <NavBar />
      <div className=""> 
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms/:category" element={<Rooms />} />
        </Route>

        {/* Routes برا الـ Layout (من غير Navbar + Footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
