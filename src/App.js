import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, FormControl, Jumbotron, Container, Card, Button } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from './images/logo.jpg/portfolio_img.jpg'
import Project1 from './images/logo.jpg/hufilm.png'
import Project2 from './images/logo.jpg/todolist.png'
import Project3 from './images/logo.jpg/Canvas.png'
import { MDBView, MDBMask, MDBCol, MDBContainer } from "mdbreact";

function App() {



  return (
    <div className="App">

      <div className="navbar">

        <Navbar bg="light" variant="light" className="fixed-top py-3">
          <Navbar.Brand href="#home">Minh Nguyen's Portfolio</Navbar.Brand>
          < Nav className="  ml-auto my-2 my-lg-0 nav-item" >
            <Link
              href="#about"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}

            >About</Link>

            <Link to="projects"
              href="#projects"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="nav-item"

            >Project</Link>

            <Link to="skills"
              href=""
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="nav-item"
            >Skills</Link>

            <Link to="contact"

              href=""
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              className="nav-item"

              duration={1000}>Resume</Link>

            <Link to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              className="nav-item"
              href=""
              duration={1000} >Contact</Link>


          </Nav>

        </Navbar>
      </div>
      <div className="box-container">
        <Jumbotron fluid className="jumboImg" id="home">
          <Container>
            <h1 className="title"> Hello, I am Minh Nguyen.</h1>
            <h1 className="title"> I am a fullstack web developer.</h1>
            <Link to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              className="nav-item"
              href=""
              duration={1000}
              className="btn btn-light btn-xl moreBtn " style={{ color: "black" }} href="#about">Who I am?</Link>


          </Container>
        </Jumbotron>

        <section id="about" style={{ color: "black" }} >
          <div className="container">
            <div class="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-black mt-0" >About me</h2>
                <hr className="divider light my-4" />
                <article id="top" class="wrapper style1">
                  <div className="container">
                    <div className="row">
                      <div className="col-4 col-5-large col-12-medium">
                        <img src={Logo} className="profile_img" />

                      </div>

                      <div className="col-8 col-7-large col-12-medium">
                        <header>
                          <h1>Hi. I'm <strong>Minh Nguyen</strong>.</h1>
                        </header>

                        <p>I am currently a rising sophomore, with the intention to major in Computer Science and Chinese Studies, in <strong>The College of Wooster</strong>, Ohio, United States. I am a quick-learner, who have high flexibility to adapt to new environment. As a developer, my priority is to provide an <strong>intuitive</strong>  and <strong>dynamic</strong>  experience for users! </p>
                      </div>

                    </div>
                  </div>
                </article>

                <Link to="projects"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  className="nav-item"
                  href=""
                  duration={1000} className="btn btn-light btn-xl js-scroll-trigger" style={{ color: "black" }}>Projects that I do</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section" id="projects" style={{ color: "black" }}>
          <div className="container">
            <h2 className="text-center mt-0">My Projects</h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">


                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Project1} className="project_img" />
                    <Card.Body>
                      <Card.Title>HuFilm Project</Card.Title>
                      <Card.Text>
                        This is the site that I built from scratch, using React and HTML/CSS, to clone the IMDB webpage uisng its own API.
                        This site has many features such as searching movies, providing movies ratting from highest to lowest and vice versa,...etc
                      </Card.Text>
                      <p>#ReactJS #Async/Await #Design/User Interface</p>
                      <a> <Button className="btn btn-light btn-xl moreBtn " style={{ color: "black" }} href="https://focused-mcclintock-504b06.netlify.app/" target="_blank" >Live Demo</Button></a>
                      <a> <Button className="btn btn-light btn-xl moreBtn " style={{ color: "black" }} href="https://github.com/minh197/Imdb-clone" target="_blank" >Github Link</Button></a>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center ml-5">
                <div className="mt-5">

                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Project2} className="project_img" />
                    <Card.Body>
                      <Card.Title>My to-do-list</Card.Title>
                      <Card.Text>
                        This is the site that I used HTML/CSS and JS to build from scratch. Users can input their to-do tasks as well as delete them.In addition, these tasks are saved in the local storage
                      </Card.Text>
                      <p>#Design/User Interface</p>
                      <a> <Button className="btn btn-light btn-xl moreBtn " style={{ color: "black" }} href="https://gallant-goodall-969c44.netlify.app/" target="_blank" >Live Demo</Button></a>
                      <a> <Button className="btn btn-light btn-xl moreBtn " style={{ color: "black" }} href="https://github.com/minh197/to-do-list" target="_blank" >Github Link</Button></a>
                    </Card.Body>
                  </Card>
                  <div className="pt-4 pl-5">
                  <Link to="skills"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    className="nav-item"
                    href=""
                    duration={1000} className="btn btn-light btn-xl js-scroll-trigger" style={{ color: "black" }}>My Skills</Link>
                </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center ml-5">
                <div className="mt-5">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Project3} className="project_img" />
                    <Card.Body>
                      <Card.Title>Canvas Game</Card.Title>
                      <Card.Text>
                        My first game site using HTML5 canvas. The site requires a solid understanding of JS to customize!
                      </Card.Text>
                      <p>#Design/User Interface #JS #Canvas Game</p>
                      <a> <Button className="btn btn-light btn-xl moreBtn " style={{ color: "black" }} href="https://cocky-colden-24192c.netlify.app/" target="_blank" >Live Demo</Button></a>
                      <a> <Button className="btn btn-light btn-xl moreBtn " style={{ color: "black" }} href="https://github.com/minh197/Catching-fish-game" target="_blank" >Github Link</Button></a>
                    </Card.Body>
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div id="skills">
          <div className="container-fluid p-0" id="skills">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg"
                ><img className="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div></a
                >
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg"
                ><img className="img-fluid" src="assets/img/portfolio/thumbnails/2.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div></a
                >
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg"
                ><img className="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div></a
                >
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg"
                ><img className="img-fluid" src="assets/img/portfolio/thumbnails/6.jpg" alt="" />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>



      </div>

    </div>
  );
}

export default App;
