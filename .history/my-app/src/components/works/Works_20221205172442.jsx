import React from "react";
import "./works.css";

const Works = () => {
  return (
    <>
      <section id="works">
        <h5>My</h5>
        <h2>Works</h2>
        <div className="cards">
          <div className="card-content" id="tms_project">
            <h2>Ticket Management System web app</h2>

            <a href="#">
              <h5>details</h5>
            </a>
          </div>
          <div className="card-content">
            <h2>Ticket management mobile apllication</h2>
            <a href="https://github.com/hanishnaripireddi/tms_flutter">
              <h5>details</h5>
            </a>
          </div>
          <div className="card-content">
            <h2>Expenditure tracker app</h2>
            <a href="https://github.com/hanishnaripireddi/ExpenseApp">
              <h5>details</h5>
            </a>
          </div>
          <div className="card-content">
            <h2>Trending videos app</h2>
            <a href="https://github.com/hanishnaripireddi/trending-videos">
              <h5>details</h5>
            </a>
          </div>

          <div className="card-content">
            <a href="https://github.com/hanishnaripireddi">More</a>
          </div>
        </div>


        <h5>My</h5>
        <h2>Work Experience</h2>
        <div className="experience">
          <div className="card-content">
            <h2>Cognizant</h2>
            <ul>
              <li>Programmer Analyst Trainee</li>
              <li>
                <h6>Feb 2022 - Aug 2022</h6>
              </li>
            </ul>
            <a href="#">details</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
