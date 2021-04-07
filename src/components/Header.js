import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import menu from '../assets/imgs/menu.png';
import '../assets/css/header.css';

export const Header = () => {
  const [state, setState] = useState({
    burgerOpen: false
  })

  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflowY = 'visible';
  }, [])

  return (
    <header>
      <nav id='primary-header'>
        <NavLink to='/'><h1>RETRO NEWS</h1></NavLink>
        
        <div id='menu-container'>
          {state.burgerOpen ? 
            <span id='close-icon'onClick={(e) => {
            setState({...state, burgerOpen: false});
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
            }}>X</span>
           
          :
            <img src={menu} id='menu-icon' alt='Menu icon' onClick={(e) => {
              setState({...state, burgerOpen: true}); 
              document.getElementsByTagName('body')[0].style.overflowY = 'visible';
            }} /> 
          }
        </div>
      </nav> 

      {state.burgerOpen ?  
				<div id='burger-container'>
					<div className='burger flex-column'>
            <NavLink to='/null'><h1>LATEST</h1></NavLink>
            <NavLink to='/null'><h1>FEATURED</h1></NavLink>
            <NavLink to='/null'><h1>TRENDING</h1></NavLink>
            <NavLink to='/null'><h1>MUST READ</h1></NavLink>
            <NavLink to='/null'><h1>SUBSCRIBE</h1></NavLink>
            <NavLink to='/null'><h1>CONTACT</h1></NavLink>  
					</div>
        </div> :
        null
      }

      <nav id='secondary-header'>
        <NavLink to='/null'><h1>LATEST</h1></NavLink>
        <NavLink to='/null'><h1>FEATURED</h1></NavLink>
        <NavLink to='/null'><h1>TRENDING</h1></NavLink>
        <NavLink to='/null'><h1>MUST READ</h1></NavLink>
        <NavLink to='/null'><h1>SUBSCRIBE</h1></NavLink>
        <NavLink to='/null'><h1>CONTACT</h1></NavLink>
      </nav>
    </header>
  )
}