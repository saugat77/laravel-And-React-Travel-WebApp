import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './login-and-signup.css'
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';


function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { setUser, setToken } = useStateContext();

  const onsubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmPasswordRef.current.value,
    }
    axiosClient.post('/signup', payload).then((data) => {
      setUser(data.user)
      setToken(data.token)
    })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      })
  }
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onsubmit}>
          <h1 className='title'> Signup for Free</h1>
          <input ref={nameRef} type="text" placeholder='Full Name' />
          <input ref={emailRef} type="email" placeholder='Email' />
          <input ref={passwordRef} type="password" placeholder='Password' />
          <input ref={confirmPasswordRef} type="password" placeholder='Confirm Password' />
          <button className='btn btn-block'>Register</button>
        </form>
        <p className='message'>
          Already Registered? <Link to='/login'>Sign In</Link>
        </p>

      </div>
    </div >
  )
}

export default Register
