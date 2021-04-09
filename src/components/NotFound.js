import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/error.css';

const NotFound = () => {
  return (
    <main id='error'>
      <h1>404</h1>
      <p>You've reached the end of the world, go back to our <NavLink to='/'><span>homepage</span></NavLink></p>
    </main>
  )
}

export default NotFound;