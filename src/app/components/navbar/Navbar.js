import classes from './Navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({loggedInStatus, userData}) => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Buttons}>
        <Link to='/' style={{ textDecoration: 'none' }}><p className={classes.Logo}>Uncharted</p></Link>
        <p className={classes.UserButton}>Explore</p>
        <p className={classes.UserButton}>Plan</p>
      </div>
      { loggedInStatus === "LOGGED_IN" ?
        <div className={classes.Buttons} >
          <p className={classes.UserButton}>{userData.first_name}</p>
          <p className={classes.Button}>Logout</p>
        </div> :
        <div className={classes.Buttons} >
          <Link to='/login' style={{ textDecoration: 'none' }}><p className={classes.Button}>Login</p></Link>
          <Link to='/registration' style={{ textDecoration: 'none' }}><p className={classes.Button}>Register</p></Link>
        </div>
      }
    </div>
  )
}

export default Navbar;
