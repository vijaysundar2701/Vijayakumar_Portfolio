import React from "react";
import ReactDOM from "react-dom";

import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import "./index.css";
class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <body>
        <div class="heading">
          <div class="jumbotron text-center" id="heading">
            <h1 class="myname">Vijayakumar</h1>
            <p class="myoccupation">Software Developer</p>
            <ul class="nav nav-pills nav-justified" id="navigation">
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/project">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/youtube">
                  Youtube
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="rounded-circle">
                  <img
                    src="https://1.bp.blogspot.com/-Ufl-MqXvRKE/X1jOamG2mjI/AAAAAAAAARg/XQU8cnRrHCI69b1FSB3oxzeBF1eX3H_LgCLcBGAsYHQ/w199-h256/MY%2BPHOTO.JPG"
                    class="rounded-circle mx-auto d-block"
                    alt="my photo"
                    width="130px"
                    height="150px"
                  />
                </div>
                <br />
              </div>
              <div class="col-sm-8">
                <h2 class="myskills">Career Objective</h2>
                <br />
                <p class="skills">
                  To work in a professional environment where I can find myself
                  in decisive opportunities for creating value-added career for
                  myself and extend quality service to my organization.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <h2 class="myskills">Technical Skils</h2>
                <br />
                <ul class="skills">
                  <li>
                    Front end languages - HTML , CSS , Javascript , React JS
                  </li>
                  <li>Back end languages – Java , Python , Node JS</li>
                  <li>Database – MySQL , MongoDB</li>
                </ul>
              </div>
              <div class="col-sm-6">
                <h2 class="myskills">Internship and Certification</h2>
                <br />
                <ul class="skills">
                  <li>
                    I done Web Development Intern in Shiash Infotech Solutions
                  </li>
                  <li>
                    I Completed Python and MySQL online certificate courses in
                    GUVI
                  </li>
                </ul>
              </div>
              <br />
              <div class="col-sm-12">
                <h2 class="myskills">My Projects</h2>
                <br />
                <table class="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th>Project Domain</th>
                      <th>Programming Language</th>
                      <th>Project Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Full Stack Web Developement</td>
                      <td>
                        HTML, CSS, Javascript, Bootstrap, Java, JSP, Servlet
                      </td>
                      <td>
                        <a
                          href={
                            "https://github.com/vijaysundar2701/Bus_Booking_Website_Using_Java"
                          }
                        >
                          Bus Booking Application
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Full Stack Web Developement</td>
                      <td>
                        HTML, CSS, Javascript, Bootstrap, Java, JSP, Servlet
                      </td>
                      <td>
                        <a
                          href={
                            "https://github.com/vijaysundar2701/Web-Application-For-Recruiters-To-Assessing-The-Candidate-Skills-Using-Java"
                          }
                        >
                          Candidate Skills Assessment Application
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Responsive Web Design</td>
                      <td>HTML, CSS, Javascript, ReactJS, Bootstrap</td>
                      <td>
                        <a
                          href={
                            "https://github.com/vijaysundar2701/Responsive-Website-Using-ReactJS"
                          }
                        >
                          Responsive Website Using ReactJS
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Web Application</td>
                      <td>HTML, CSS, Javascript, ReactJS</td>
                      <td>
                        <a
                          href={
                            "https://github.com/vijaysundar2701/ToDo_List_App_Using_ReactJS"
                          }
                        >
                          ToDo List App
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-sm-12">
                <h2 class="myskills">Educational Qualification</h2>
                <br />
                <table class="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th>Degree</th>
                      <th>School/College</th>
                      <th>YOP</th>
                      <th>Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>B.TECH(IT)</td>
                      <td>Jeppiaar SRR Engineering College</td>
                      <td>2020</td>
                      <td>67</td>
                    </tr>
                    <tr>
                      <td>12th</td>
                      <td>BVMHS School</td>
                      <td>2016</td>
                      <td>75</td>
                    </tr>
                    <tr>
                      <td>10th</td>
                      <td>BVMHS School</td>
                      <td>2014</td>
                      <td>87</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

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
      </body>
    );
  }
}

export default Home;
