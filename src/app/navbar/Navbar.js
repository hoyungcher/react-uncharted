import classes from './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({loggedInStatus, userData}) => {
  return (
    <div className="Navbar">
      <Link to='/' style={{ textDecoration: 'none' }}><h1 className='Logo'>Uncharted</h1></Link>
      { loggedInStatus === "LOGGED_IN" ?
        <div className='Buttons' >
          <p className='Button'>{userData.first_name}</p>
          <p className='Button'>Logout</p>
        </div> :
        <div className='Buttons' >
          <Link to='/login' style={{ textDecoration: 'none' }}><p className='Button'>Login</p></Link>
          <Link to='/registration' style={{ textDecoration: 'none' }}><p className='Button'>Register</p></Link>
        </div>
      }
    </div>
  )
}

export default Navbar;
