import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import PrivateRoute from './Components/PrivateRoute';
import CreateListing from './Pages/CreateListing';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />} >
          <Route path="/Profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
