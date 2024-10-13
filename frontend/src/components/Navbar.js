import React from 'react'
import { Link } from 'react-router-dom';
import {CiMobile3} from 'react-icons/ci'

function Navbar({show}) {
  return (
    <div>
      <nav className={show ? 'nav mobile-nav' : 'nav'}>
       <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/resume'}>Resume</Link>
        <Link to={'/portfolio'}>Portfolio</Link>
       </ul>
       <div className='phone'>
      <CiMobile3/>
      <span>03114220933</span>
       </div>
      </nav>
    </div>
  )
}

export default Navbar
