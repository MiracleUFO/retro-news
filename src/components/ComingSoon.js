import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/error.css';

const ComingSoon = () => {
  return (
    <main id='error'>
      <h1>Coming Soon</h1>
      <p>Go back to our <NavLink to='/'><span>homepage</span></NavLink></p>
    </main>
  )
}

export default ComingSoon;