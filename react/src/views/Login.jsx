import React from 'react'
import { Link } from 'react-router-dom';
import './login-and-signup.css'
function login() {
  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <h1 className="title">Login into your account</h1>
        <form onSubmit={onsubmit}>
          <input type="email" name="" placeholder='Email' id="" />
          <input type="password" name="" placeholder='Password' id="" />
          <button className='btn btn-block'>Login</button>
          <p className='message'>
            Not Registered? <Link to='/register'>Create an account</Link>
          </p>
        </form>

      </div>
    </div>
  )
}

export default login
