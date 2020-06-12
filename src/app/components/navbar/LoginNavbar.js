import classes from './LoginNavbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginNavbar = () => {
  return (
    <div className="LoginNavbar">
      <Link to='/' style={{ textDecoration: 'none' }}><h1 className='Logo'>Uncharted</h1></Link>
      <div className='Buttons' >
        <Link to='/login' style={{ textDecoration: 'none' }}><p className='Button'>Login</p></Link>
        <Link to='/registration' style={{ textDecoration: 'none' }}><p className='Button'>Register</p></Link>
      </div>
    </div>
  )
}

export default LoginNavbar;
