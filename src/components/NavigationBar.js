import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavigationBar.css'

const NavigationBar = () => {
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className='header'>
      <Link to='/'><h1>NIKKO DUMRIQUE</h1></Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
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
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}}/>)}
      </div>
    </div>
  )
}

export default NavigationBar