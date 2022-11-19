import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/images/IMG_20220110_222801_396 (1)-modified.png";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hanish Koushik").start();
            }}
          />
        </h1>

        <h5 className="text-light">a Developer.</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="profile picture" />
        </div>

        <a href="#about" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
