import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavigationBarComponent.css'

const NavigationBarComponent = () => {
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className='header'>
      <Link to='/'><h1 className='logo'> NIKKO</h1></Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
        <li>
          <a href='https://drive.google.com/file/d/1D3F-hxTLQ3BJIxEn4I8LWxZtqvUuw5FC/view?usp=sharing' target='_blank'>
            {/* <Link to='/Resume'>Resume</Link> */}
            <div>Resume</div>
          </a>
        </li>
        {/* <li>
          <Link to='/Projects'>Projects</Link>
        </li> */}
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}}/>)}
      </div>
    </div>
  )
}

export default NavigationBarComponent