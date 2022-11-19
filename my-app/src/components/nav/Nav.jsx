import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'
import { useState } from 'react';



const Nav = () => {
  const [activeNav,setActiveNav] = useState('#');


  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav ==='#' ? 'active': ''} title='Home page'><AiOutlineHome/></a>

      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''} title='About'><AiOutlineUser/></a>

      <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills' ? 'active' : ''} title='Skills'><BiBook/></a>

      <a href="#works" onClick={()=>setActiveNav('#works')} className={activeNav==='#works' ? 'active' : ''} title='Works'><RiServiceLine/></a>

      

      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''} title='Contact'><HiOutlineMail/></a>
    </nav>
  )
}

export default Nav
