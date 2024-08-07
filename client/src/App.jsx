import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sign_in from './Pages/Sign_in';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Header from './Components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SignIn" element={<Sign_in />} />
        <Route path="/SignUp" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  )
}
