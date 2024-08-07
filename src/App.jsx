import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sign_in from './Pages/Sign_in';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
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
