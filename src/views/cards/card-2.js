import React from "react";
import {
    Card,
    CardImg,
    Container,
    Row,
    Col
} from "reactstrap";
export default function ImageCard() {
    return (
        <>

<Container style={{ marginTop: '150px' }} className="container-lg">
  <center><h1>Fundamentals Differences</h1></center>
  
  <Row className="mt-5 d-flex align-items-center justify-content-center">
    <Col md={6} lg={4} className="mb-4">
      <Card>
        <CardImg
          alt="Privacy Image"
          src={require("assets/img/theme/privacy.jpeg")}
          className="img-fluid"
        />
      </Card>
    </Col>
    <Col md={6} lg={8} className="mb-4">
      <Card style={{ border: "none" }}>
        <p>
          Proton was started in 2014 by scientists who met at CERN and shared a vision of an Internet that puts people first and defends freedom. Our commitment to transparency, open-source software, and rigorous encryption has seen Proton become recommended by the United Nations and used by millions around the world.
        </p>
      </Card>
    </Col>
  </Row>
</Container>

        </>
    )
}