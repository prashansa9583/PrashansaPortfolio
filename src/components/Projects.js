import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { WorkCard } from "./WorkExp";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import workImg1 from "../assets/img/work-image1.jpeg";
import workImg2 from "../assets/img/work-image2.jpeg";
import ecImg1 from "../assets/img/extrac-image1.jpeg";
import ecImg2 from "../assets/img/extrac-image2.jpeg";
import ecImg3 from "../assets/img/extrac-image3.jpeg";
import eventImg1 from "../assets/img/event-image1.jpg";
import eventImg2 from "../assets/img/event-image2.jpg";
import eventImg3 from "../assets/img/event-image3.jpg";

import stars from "../assets/img/stars.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Number transcription tool, TIFR",
      description: "Research & Development",
      imgUrl: projImg1,
      url: "https://github.com/AashishBathe/Number-Transcription-Tool",
      stack:"Python,Flask,Django,HTML,CSS",
      txt: "click to download",
    },
    {
      title: "Dust Buster",
      description: "Hackathon",
      imgUrl: projImg2,
      url: "https://github.com/prashansa9583/DustBuster",
      stack:"Laravel,phpMyAdmin",
      txt: "click to download",
    },
    {
      title: "Family Disaster Management",
      description: "Radhee Foundation",
      imgUrl: projImg3,
      url: "https://github.com/prashansa9583/FamilyDisaster",
      stack:"Laravel,phpMyAdmin",
      txt: "click to download",
    },
    {
      title: "Leaving Certificate Management System",
      description: "Vidyalankar Polytechnic",
      imgUrl: projImg4,
      url: "https://github.com/prashansa9583/LeavingCertificate",
      stack:"PHP",
      txt: "click to download",
    },
    {
      title: "Hospital Management System",
      description: " ",
      imgUrl: projImg5,
      url: "https://github.com/prashansa9583/Hospital-Management-System",
      stack:"VB.NET",
      txt: "click to download",
    },
  
  ];

    const work = [
      {
        title: "Tata Institute of Fundamental Research Intern",
        description: "Research & Development",
        imgUrl: workImg1,
        url: "https://www.tifr.res.in/",
        duration: "July 2023 - Current",
      },
      {
        title: "The Robobox",
        description: "Startup",
        imgUrl: workImg2,
        url: "https://drive.google.com/file/d/1TgI-dKEwwBBT7m5xFmMMwF-yiHDbvUPi/view?usp=sharing",
        duration:"Dec 2023 - Jan 2024",
      },
    ];
    const Extracurricular = [
      {
        title: "Entrepreneurship Cell, FCRIT",
        description: "PR & Social Media Head",
        imgUrl: ecImg1,
        url:"https://www.instagram.com/ecellfcrit/",
        duration: "July 2023 - Current",
      },
      {
        title: "Campus Ambassador",
        description: "Techfest, IIT Bombay",
        imgUrl: ecImg2,
        url: "https://drive.google.com/file/d/1z75xnljBuWVMVueYVnttlVV8PWRMstO3/view?usp=sharing",
      },
      {
        title: "Hacktoberfest 2023",
        description: " ",
        imgUrl: ecImg3,
      },
    ];
    const events = [
      {
        title: " Agnel's E-SUMMIT 2024",
        description: " ",
        imgUrl: eventImg1,
      },
      {
        title: "BrandBlitz",
        description: "Marketing Workshop & Competition ",
        imgUrl: eventImg2,
      },
      {
        title: "Agnethon",
        description: " CSI X E-CELL Hackthon ",
        imgUrl: eventImg3,
      },
    ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br />
                <br />
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Extracurricular Experience</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          work.map((work, index) => {
                            return (
                              <WorkCard
                                key={index}
                                {...work}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          Extracurricular.map((Extracurricular, index) => {
                            return (
                              <WorkCard
                                key={index}
                                {...Extracurricular}
                              />
                            );
                          })
                        }
            
                      </Row>
                      <p style={{fontSize:'20px', fontWeight: 'bold'}}>Event Organizer, Ecell, FCRIT.</p>
                      <Row>
                        {
                          events.map((events, index) => {
                            return (
                              <WorkCard
                                key={index}
                                {...events}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={stars} alt="background stars" />
    </section>
  );
};
