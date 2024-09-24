import React from "react";
import {
  Card,
  CardImg,
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
export default function AppCard() {
  return (
    <>

      <Container style={{marginTop:'150px'}} className="container-lg">
        <center><h1>Saga Suite Products</h1></center>

        <Row xs={1} sm={2} md={3} className="g-4">
          <Col>
            <Card className="card-lift--hover shadow border-0">
              <CardImg style={{height:'90px',width:'100px'}} alt="..." src={require("assets/img/icons/Mail.png")} />
              <CardBody>
                <CardTitle>Mail</CardTitle>
                <CardText>This is the mail service</CardText>
                <Button>Mail</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="card-lift--hover shadow border-0">
              <CardImg alt="..." src={require("assets/img/theme/landing.jpg")} />
              <CardBody>
                <CardTitle>Talk</CardTitle>
                <CardText>This is the talk service</CardText>
                <Button>Talk</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="card-lift--hover shadow border-0">
              <CardImg alt="..." src={require("assets/img/theme/landing.jpg")} />
              <CardBody>
                <CardTitle>Files</CardTitle>
                <CardText>This is the file service</CardText>
                <Button>Files</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row xs={1} sm={2} md={3} className="g-4 mt-4">
          <Col>
            <Card className="card-lift--hover shadow border-0">
              <CardImg alt="..." src={require("assets/img/theme/landing.jpg")} />
              <CardBody>
                <CardTitle>Activity</CardTitle>
                <CardText>This is the activity service</CardText>
                <Button>Activity</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="card-lift--hover shadow border-0">
              <CardImg alt="..." src={require("assets/img/theme/landing.jpg")} />
              <CardBody>
                <CardTitle>Photos</CardTitle>
                <CardText>This is the photos service</CardText>
                <Button>Photos</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="card-lift--hover shadow border-0">
              <CardImg alt="..." src={require("assets/img/theme/landing.jpg")} />
              <CardBody>
                <CardTitle>Calendar</CardTitle>
                <CardText>This is the calendar service</CardText>
                <Button>Calendar</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  )
}