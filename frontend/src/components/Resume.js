import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import Skills from "./sub-components/Skills";
import Language from "./sub-components/Language";

import Education from "./sub-components/Education";
import Hobbies from "./sub-components/Hobbies";

const Resume = ({ show, setshow }) => {
  return (
    <>
      <section className="page resumePage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setshow(!show)} className="hamburger" />
        <div className="banner">
          <div className="first-column">
            <Skills />
            <Language />
            <div className="personal-skills">
              <h3>PERSONAL SKILLS</h3>
              <p>Creativity - Team Work - Organization</p>
            </div>
          </div>
          <div className="second-column">
          
            <Education />
          </div>
          <div className="third-column">
            <div>
              <h3>WHAT CAN I DO</h3>
              <p>
                Web Development - Full Stack Development{" "}
                <span>Website Optimization - Problem Solving</span>
                <span>Code Debugging - Project Management</span>
              </p>
            </div>
            <div>
              <h3>ADDITIONAL EXPERTIES</h3>
              <p>
                Database Management - Responsive Design{" "}
                <span>Version Control - API Integration</span>
              </p>
            </div>
            <div>
              <h3>HOBBIES AND INTERESTS</h3>
              <Hobbies/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;