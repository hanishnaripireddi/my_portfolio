import React from 'react';
import './about.css';
import ME from '../../assets/images/IMG_20220409_232333_995-modified.png'


const About = () => {
  return (
    <>
    <section id='about'>
      <h5>know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME}></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card'>
              I have an extensive knowledge on HTML, CSS, JS and ReactJs combined with my problem solving skills
              and creative thinking makes me an excellent web developer. click<a href="#skills" className="skill-link">
              More 
            </a>to know more about my skills.
            </article>
            <a href='#contact' className='btn btn-primary'>Contact Me</a>
            
          </div>
        </div>
      </div>
      
      
      
      
  
  
    </section>
    </>
  )
}

export default About
