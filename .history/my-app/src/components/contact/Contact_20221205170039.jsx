import React from "react";
import "./contact.css";
import Footer from "../footer/Footer";
import {IoMdCall} from "react-icons/io"
import {RiInstagramFill} from "react-icons/ri"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h5>My</h5>
        <h2>Contact</h2>
        <div className="contactsection">
          <div className="contactleft">
            <a href="tel:8919345825"><IoMdCall/>Contact via mobile</a>
            <br />
            <a href="https://www.instagram.com/koushik_hanish/"><RiInstagramFill/>Instagram</a>
            <br />
            <a href="https://www.linkedin.com/in/hanishnaripireddi/"><BsLinkedin/>LinkedIn</a>

            <br />
            <a href="https://github.com/hanishnaripireddi"><BsGithub/>GitHub</a>
          </div>
          <div className="contactright">
            <form action="mailto:hanishnaripireddi@gmail.com">
              <input type="text" placeholder="Your name?" />
              <input type="email" name="mail" placeholder="your Email?" />
              <input className="mail_message" type="text" placeholder="Message" />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
