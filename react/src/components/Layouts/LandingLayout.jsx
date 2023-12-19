import React from 'react'
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Home from '../Home/Home';
import '../frontend.css';

function LandingLayout() {
  return (
    <div>
      <Navbar />
      <Home />
      <Main />
    </div>
  )
}

export default LandingLayout
