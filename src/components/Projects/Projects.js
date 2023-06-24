import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flipkart from "../../Assets/Projects/flipkart.png.png";
import portfolio from "../../Assets/Projects/details.png.png";
import aadi from "../../Assets/Projects/3d.png.png";
import ecommerce from "../../Assets/Projects/ecommerce.png.png";
import tourist from "../../Assets/Projects/tourist.png.png";
import robot from "../../Assets/Projects/robot.png.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Website"
              description="Basically it is a ecommerce website where every type of headphones, speakers, ear pods, smartwatches you can select and order this product."
              ghLink="https://github.com/Riju7478/Ecommerce-Website"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robot}
              isBlog={false}
              title="Robot website"
              description="In this website maximum time i use javascript when you scroll down the website automatically the robot will be change body posture and in website i can guven java programming details. "
              ghLink="https://github.com/Riju7478/Robot-project"
              demoLink="https://robot74.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aadi}
              isBlog={false}
              title="3d project"
              description="In this website i use 3js, it is a frotend website i created for my internship. In this website is there company all details and other thing."
              ghLink="https://github.com/Riju7478/Aadi_website-main"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flipkart}
              isBlog={false}
              title="Flipkart clone"
              description="It is a clone of flipkart website, In this website is only use frontend i can't use any backened and it is my first ecommerce website. "
              ghLink="https://github.com/Riju7478/Flipkart-website"
              demoLink="https://flipkart7478.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourist}
              isBlog={false}
              title="India tourist website"
              description="In this website you can watch every tourist places in India. Basically places full details and where state the places situated which are given."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            demoLink="https://india7478.netlify.app/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="portfolio website"
              description="Basically it is my first website when i was learning web developement, In this website my all detils is there and in this website i use HTML, CSS, JAVASCRIPT."
              ghLink="https://github.com/Riju7478/portfolio-website"
             demoLink="https://rijurakshit.netlify.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
