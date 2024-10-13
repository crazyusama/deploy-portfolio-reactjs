import React from 'react'
import Navbar from './Navbar'
import {TbGridDots} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import {AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import {FaGithubSquare,FaWhatsapp} from 'react-icons/fa'

function Home({show,setshow}) {
  return (
    <div>
     <section className='page homePage'>
       <Navbar show={show}/>
       <TbGridDots onClick={()=>setshow(!show)} className='hamburger'/>
        <div className='banner'>
          <h1>Muhammad</h1>
          <h1>Usama</h1>
          <p>Web Developer</p>
          <div className='btns'>
            <Link to={'https://res.cloudinary.com/dykveta7n/image/upload/v1728807946/CV_page-0001_zpsu7u.jpg'} target='_blank'>Resume</Link>
            <Link to={'/portfolio'}>Portfolio</Link>
          </div>
        </div>
        <footer>
      <ul>
        <Link to={'https://www.linkedin.com/in/usama-khalid-70b2aa2b6/'} target='_blank'><AiFillLinkedin/></Link>
        <Link to={'https://github.com/crazyusama'} target='_blank'><FaGithubSquare/></Link>
        <Link to={''} target='_blank'><FaWhatsapp/></Link>
        <Link to={'https://www.instagram.com/usama_k.0/'} target='_blank'><AiFillInstagram/></Link>
      </ul>
      <a className='download-btn' href='/Resume.pdf' download='Resume.pdf'>[Download CV]</a>
     </footer>
     </section>

    </div>
  )
}

export default Home
