import React from "react";
import { Container, Row, Col, Card } from "reactstrap";

export default function AboutUs() {
  return (
    <div>
      <section id="about">
    <Container
      style={{ marginTop: '100px', textAlign: 'center' }} // Center the text
      className="container-lg d-flex flex-column align-items-center"
    >
      <h1>About Us</h1>

      <Row>
        <Col lg={6} className="mb-4"> {/* First column for paragraph */}
          <Card style={{ border: "none", textAlign: 'left' }}> {/* Align text to the left */}
            <p>
              At SagaSoft, we understand the journey of entrepreneurship. We know that building a successful business demands unwavering dedication and a solid foundation. That's why we're here to support you every step of the way.
            </p>          
          </Card>
        </Col>
        <Col lg={6} className="mb-4"> {/* Second column for list */}
          <Card style={{ border: "none", textAlign: 'left' }}> {/* Align text to the left */}
            <p>
            <ul className="text-justify">
              <li>Our suite of applications is designed to streamline operations and drive growth.</li>
              <li>Explore SagaSoft's full range of applications: Email, Audio & Video call, Website Builder, HRMS, HelpDesk, Wiki, Drive, ERPNext.</li>
             
            </ul>     
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
    </div>
  );
}
