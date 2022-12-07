import React from 'react'
import './skill.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Skills = () => {
  return (
    <><section id='skills'>
    
      <h5>My</h5>
      <h2>Skills</h2>
      
      <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      className="mySwiper"
      >
        <SwiperSlide>
        <div className="designer">
          <article>
            <h1>Designing</h1>
            <img src="" alt="" />
            <div className="card-content">
            <h5>Related skills:</h5>
              <ul>
                <li>Figma</li>
                <li>Spline</li>
              </ul>
            </div>
          </article>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="frontend-dev">
          <article>
            <h1>Frontend</h1>
            <img src="" alt="" />
            <div className="card-content">
              <h5>Related skills:</h5>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
                <li>ReactJs</li>
                <li>typeScript</li>
                
              </ul>
            </div>
          </article>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="backend">
          <article>
            <h1>Backend</h1>
            <img src="" alt="" />
            <div className="card-content">
              <h5>Related skills:</h5>
              <ul>
                  <li>nodeJs</li>
                  <li>expressJs</li>
                  <li>Python</li>
                </ul>
                <br />
                <h5>DataBases:</h5>
                <ul>
                  <li>MySQL</li>
                  <li>mongoDB</li>
                </ul>
              </div>
          </article>
        </div>
        </SwiperSlide>

        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>

      </Swiper>
      
      <div className="cards">

        {/* designer */}
        <div className="designer">
          <article>
            <h1>Designing</h1>
            <img src="" alt="" />
            <div className="card-content">
            <h5>Related skills:</h5>
              <ul>
                <li>Figma</li>
                <li>Spline</li>
              </ul>
            </div>
          </article>
        </div>

        {/* frontend */}
        <div className="frontend-dev">
          <article>
            <h1>Frontend</h1>
            <img src="" alt="" />
            <div className="card-content">
              <h5>Related skills:</h5>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
                <li>ReactJs</li>
                <li>typeScript</li>
                
              </ul>
            </div>
          </article>
        </div>

        {/* backend */}
        <div className="backend">
          <article>
            <h1>Backend</h1>
            <img src="" alt="" />
            <div className="card-content">
              <h5>Related skills:</h5>
              <ul>
                  <li>nodeJs</li>
                  <li>expressJs</li>
                  <li>Python</li>
                </ul>
                <br />
                <h5>DataBases:</h5>
                <ul>
                  <li>MySQL</li>
                  <li>mongoDB</li>
                </ul>
              </div>
          </article>
        </div>

        {/* others */}
        <div className="Others">
          <article>
            <h1>Others</h1>
            <div className="card-content">
              <h5>Programming:</h5>
              <ul>
                <li>Java(Intermediate)</li>
                <li>DSA</li>
              </ul>
              <br />
              <h5>Cloud:</h5>
              <ul><li>AWS deployment</li>
              <li>NGINX</li>
              <li>git CI/CD pipeline</li></ul>
            </div>
            
          </article>
        </div>
        <div>
          <article>
            <h1>Dev tools</h1>
            <div className="card-content">
              <h5>tools:</h5>
              <ul><li>git</li><li>GitHub</li><li>Postman</li><li>Chrome Dev tools</li></ul>
            </div>
          </article>
        </div>
        
        
      </div>
      <div>
        <a href="#works" className='link'>My works</a>
      </div>
     
      
      </section></>
  )
}

export default Skills
