import React from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <div className='header'>
      <Link to='/'><h1>NIKKO DUMRIQUE</h1></Link>
      <ul className='nav-menu'> 
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
        <li>
          <Link to='/Resume'>Resume</Link>
        </li>
        <li>
          <Link to='/Projects'>Projects</Link>
        </li>
      </ul>
      <div className='hamburger'>
        <FaBars size={20} style={{color: '#fff'}}/>
      </div>
    </div>
  )
}

export default NavigationBar