
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/Talk.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/theme/nextcloud-talk.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-primary">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Saga Mail
                </h1>
                <p className="lead text-white mt-4">
                Create your email ID securely with Saga Mail, a fully open-source solution protected by end-to-end encryption. Your privacy is our pride!
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href=""
                >
                  Get Mail
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
          <Container style={{ marginTop: '100px' }} className="py-md">
            <Row  className="justify-content-between align-items-center">
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Saga Meet
                </h1>
                <p className="lead text-white mt-4">
                Experience high-quality video conferencing with Saga Meet, designed for secure and private communication. Your conversations are our priority!
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href=""
                >
                  Get Meet
                </Button>
              </Col>

            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
          <Container className="py-md">
            <Row style={{ marginTop: '100px' }} className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Saga Chat
                </h1>
                <p className="lead text-white mt-4">
                Communicate securely with Saga Chat, your private messaging platform for real-time chats and file sharing. Your security is our commitment!
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href=""
                >
                  Get Chat
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
          <Container className="py-md">
            <Row style={{ marginTop: '100px' }} className="justify-content-between align-items-center">
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Saga File
                </h1>
                <p className="lead text-white mt-4">
                Store your documents securely with Saga Files, featuring robust encryption and easy access anytime, anywhere. Your files, your control!
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href=""
                >
                  Get File
                </Button>
              </Col>

            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
          <Container className="py-md">
            <Row style={{ marginTop: '100px' }} className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Photos
                </h1>
                <p className="lead text-white mt-4">
                  Argon Design System comes with four pre-built pages to help
                  you get started faster. You can change the text and images and
                  you're good to go.
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href=""
                >
                  Get photos
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
          <Container className="py-md">
            <Row style={{ marginTop: '100px' }} className="justify-content-between align-items-center">
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Activity
                </h1>
                <p className="lead text-white mt-4">
                  Argon Design System comes with four pre-built pages to help
                  you get started faster. You can change the text and images and
                  you're good to go.
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href=""
                >
                  Get activity
                </Button>
              </Col>

            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
