import React from "react";
import "./index.css";
class Project extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="heading">
        <div class="jumbotron text-center" id="heading">
          <h1 class="myname">Vijayakumar</h1>
          <p class="myoccupation">Software Developer</p>
          <ul class="nav nav-pills nav-justified" id="navigation">
            <li class="nav-item">
              <a class="nav-link " href="/Vijayakumar_Portfolio">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/about">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/youtube">
                Youtube
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h2 class="myskills" style={{ textAlign: "justify" }}>
                Web application for recruiters to shortlist the best candidate
              </h2>
              <div>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/8-x-w0hZ2UI"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </div>
                <p class="skills" style={{ textAlign: "justify" }}>
                  Recruiters will be able to shortlist the candidate based on
                  there technical , aptitude and communication skills once the
                  candidate completed the test. In this application , Candidate
                  also booking the slot for there exam and they also see there
                  performance when the result published.
                </p>
                <h2 class="myskills">Project Domain and Tools</h2>
                <p class="skills">
                  This application developed by using the following programming
                  languages and tools
                </p>
                <ul>
                  <li>Frontend - HTML, CSS, Javascript, Bootstrap</li>
                  <li>Backend - Java, JSP, Servlet, JDBC</li>
                  <li>Database - MySQL</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href={
                          "https://github.com/vijaysundar2701/Web-Application-For-Recruiters-To-Assessing-The-Candidate-Skills-Using-Java"
                        }
                      >
                        Github Link For Project Source Code
                      </a>
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>

            <div class="col-sm-12">
              <h2 class="myskills" style={{ textAlign: "justify" }}>
                Online Bus Booking Web Application
              </h2>
              <div>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/_jLimZhKUB4"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </div>
                <p class="skills" style={{ textAlign: "justify" }}>
                  Online Bus Ticket Booking Application helpful for bus owners
                  and travellers. In Admin Panel, Bus owners upload the
                  departure place, destination place, journey date, departure
                  time, type of bus, cost. In Customer Panel, Customer can book
                  the tickets based on there interest/needs.
                </p>
                <h2 class="myskills">Project Domain and Tools</h2>
                <p class="skills">
                  This application developed by using the following programming
                  languages and tools
                </p>
                <ul>
                  <li>Frontend - HTML, CSS, Javascript</li>
                  <li>Backend - Java, JSP, Servlet, JDBC</li>
                  <li>Database - MySQL</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href={
                          "https://github.com/vijaysundar2701/Bus_Booking_Website_Using_Java"
                        }
                      >
                        Github Link For Project Source Code
                      </a>
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-12">
              <h2 class="myskills" style={{ textAlign: "justify" }}>
                Responsive Website Using React JS
              </h2>
              <div>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/R0CopcuYh1k"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </div>
                <p class="skills" style={{ textAlign: "justify" }}>
                  I created this responsive website for myself. Hereby I
                  embedded my youtube channel videos and enclosed my project
                  details, personal and contact details. But, Its look like a
                  portfolio.
                </p>
                <h2 class="myskills">Project Domain and Tools</h2>
                <p class="skills">
                  This application developed by using the following programming
                  languages and tools
                </p>
                <ul>
                  <li>Frontend - React JS, HTML, CSS, Javascript, Bootstrap</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href={
                          "https://github.com/vijaysundar2701/Responsive-Website-Using-ReactJS"
                        }
                      >
                        Github Link For Project Source Code
                      </a>
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-12">
              <h2 class="myskills" style={{ textAlign: "justify" }}>
                To Do List App Using React JS
              </h2>
              <div>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/j28RMsRpD2o"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </div>
                <p class="skills" style={{ textAlign: "justify" }}>
                  To Do List App helpful for user to plan their task and track
                  their task. User can also strikeout or delete their task once
                  they completed their task
                </p>
                <h2 class="myskills">Project Domain and Tools</h2>
                <p class="skills">
                  This application developed by using the following programming
                  languages and tools
                </p>
                <ul>
                  <li>Frontend - React JS, HTML, CSS, Javascript</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href={
                          "https://github.com/vijaysundar2701/ToDo_List_App_Using_ReactJS"
                        }
                      >
                        Github Link For Project Source Code
                      </a>
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="jumbotron text-center" id="footer">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a
                href="https://www.linkedin.com/in/vijayakumar2701"
                class="fa fa-linkedin nav-link"
                style={{ color: "white" }}
              />
            </li>
            <li class="nav-item">
              <a
                href="https://www.youtube.com/vjtechnowizard"
                class="fa fa-youtube nav-link"
                style={{ color: "white" }}
              />
            </li>
            <li class="nav-item">
              <a
                href="https://www.github.com/vijaysundar2701"
                class="fa fa-github nav-link"
                style={{ color: "white" }}
              />
            </li>
            <li class="nav-item">
              <a
                href="https://www.instagram.com/vjtechnowizard"
                class="fa fa-instagram nav-link"
                style={{ color: "white" }}
              />
            </li>
            <li class="nav-item">
              <a
                href="https://www.facebook.com/profile.php?id=100011763072508"
                class="fa fa-facebook nav-link"
                style={{ color: "white" }}
              />
            </li>
            <li class="nav-item">
              <a
                href="https://www.twitter.com/vijaysundars"
                class="fa fa-twitter nav-link"
                style={{ color: "white" }}
              />
            </li>
          </ul>
          <br />
          <p>Copyright By VJ</p>
        </div>
      </div>
    );
  }
}

export default Project;
