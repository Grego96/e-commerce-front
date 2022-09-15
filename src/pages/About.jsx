import Footer from "../components/Footer";
import NavHome from "../components/NavHome";
import avatar from "../img/others/avatar.png";
import bootstrap from "../img/others/bootstrap.png";
import css from "../img/others/css.png";
import figma from "../img/others/figma.png";
import github from "../img/others/github.png";
import js from "../img/others/js.png";
import mer from "../img/others/mer.jpg";
import mysql from "../img/others/mysql.png";
import node from "../img/others/node.png";
import react from "../img/others/react.png";
import redux from "../img/others/redux.png";
import "./css/About.css";
import "animate.css";

function About() {
  return (
    <div>
      <NavHome />
      <div className="main-container">
        <div className="content-container">
          <h1>
            What is <span> Rad Power Bikes?</span>
          </h1>
          <p className="main-text">
            <strong>Rad Power Bikes</strong> is a web application done under the MERN stack as a
            final project of a Coding Bootcamp in Hack Academy, an educational institution
            specialized in programming courses. The bootcamp is a full-time course that prepares
            young professionals as Full Stack Jr. Developers. The purpose of the final project is to
            put in practice adquired knowledge using diverse technologies. The project was developed
            in three weeks by three people, accounting a total of 480 hours.
          </p>
        </div>
      </div>
      <div className="content-container">
        <h2>Planning</h2>
        <div className="row">
          <div className="col-xl-6">
            <img
              src={mer}
              alt="MER"
              style={{ width: "100%", borderRadius: "10px", marginBottom: "50px" }}
              className="animation"
            />
          </div>
          <div className="col-xl-6">
            <h3>1 - MER and ERD </h3>
            <p className="planning-text">
              One of our first milestones of our project was the development of a carefully thinked
              Entity-Relations Diagram. We defined the main relations between the following
              entities: User, Product, Category and Order.
            </p>
            <h3>2 - Design and Inspiration </h3>
            <p className="planning-text">
              We inspire our website on Rad Power Bikes, the original website. We nurtue our
              database using pictures, descriptions, names and prices of that website too.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <h3>3 - Work methodology </h3>
            <p className="planning-text">
              We organized our work using an Agile Methodology with three sprints. Every sprint had
              tasks that were organized and developed individually, or in groups, using Github
              Projects to determine tasks completion. Every interaction within its developers, and
              by extension, the whole project, was done online using Discord.
            </p>
          </div>
          <div className="col-xl-6">
            <img
              src={mer}
              alt="MER"
              style={{ width: "100%", borderRadius: "10px" }}
              className="animation"
            />
          </div>
        </div>
      </div>
      <div className="technologies">
        <div className="content-container">
          <h2>Technologies</h2>
          <div className="techno-container">
            <div className="col">
              <div>
                <img src={react} alt="React" />
                <p style={{ textAlign: "center" }}>React</p>
              </div>
              <div>
                <img src={bootstrap} alt="React" />
                <p style={{ textAlign: "center" }}>Bootstrap</p>
              </div>
              <div>
                <img src={css} alt="React" />
                <p style={{ textAlign: "center" }}>CSS 3</p>
              </div>
            </div>
            <div className="col">
              <div>
                <img src={js} alt="React" />
                <p style={{ textAlign: "center" }}>Javascript</p>
              </div>
              <div>
                <img src={github} alt="React" />
                <p style={{ textAlign: "center" }}>GitHub</p>
              </div>
              <div>
                <img src={node} alt="React" />
                <p style={{ textAlign: "center" }}>Node.js</p>
              </div>
            </div>
            <div className="col">
              <div>
                <img src={redux} alt="React" style={{ width: "90px" }} />
                <p style={{ textAlign: "center" }}>Redux</p>
              </div>
              <div>
                <img src={mysql} alt="React" style={{ width: "70px" }} />
                <p style={{ textAlign: "center" }}>MySQL</p>
              </div>
              <div>
                <img src={figma} alt="React" style={{ width: "70px" }} />
                <p style={{ textAlign: "center" }}>Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="content-container">
          <h2>Our Team</h2>
          <div className="team-container">
            <div className="col-lg-4">
              <img src={avatar} alt="Avatar" className="animation" />
              <h4>Manuel Perera</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 30 30"
                className="animation-svg"
                style={{ fill: "#000000" }}
              >
                {" "}
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
                style={{ fill: "#0A66C2" }}
              >
                {" "}
                <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
              </svg>
            </div>
            <div className="col-lg-4">
              <img src={avatar} alt="Avatar" className="animation" />
              <h4>Gregory Hunkeler</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 30 30"
                style={{ fill: "#000000" }}
              >
                {" "}
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
                style={{ fill: "#0A66C2" }}
              >
                {" "}
                <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
              </svg>
            </div>
            <div className="col-lg-4">
              <img src={avatar} alt="Avatar" className="animation" />
              <h4>Tayra Cutri</h4>
              <a href="https://github.com/tayracutri" target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                  style={{ fill: "#000000" }}
                >
                  {" "}
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/tayracutri/" target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  style={{ fill: "#0A66C2" }}
                >
                  {" "}
                  <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
