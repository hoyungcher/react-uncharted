import classes from './LoginNavbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginNavbar = () => {
  return (
    <div className={classes.LoginNavbar}>
      <Link to='/' style={{ textDecoration: 'none' }}><p className={classes.Logo}>Uncharted</p></Link>
      <div className={classes.Buttons}>
        <Link to='/login' style={{ textDecoration: 'none' }}><p className={classes.UserButton}>Login</p></Link>
        <Link to='/registration' style={{ textDecoration: 'none' }}><p className={classes.Button}>Register</p></Link>
      </div>
    </div>
  )
}

export default LoginNavbar;
