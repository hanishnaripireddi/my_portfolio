import React from 'react';
import { BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import './header.css'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/hanishnaripireddi/" ><BsLinkedin/></a>
        <a href="https://github.com/hanishnaripireddi"><BsGithub/></a>
        <a href="https://github.com"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials
