import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  Row,
  Col,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Modal,
  CardBody,
  CardTitle,
  CardText,
  Card
} from "reactstrap";

const DemoNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Modal state

  useEffect(() => {
    const headroom = new Headroom(document.getElementById("navbar-main"));
    // Initialise Headroom
    headroom.init();
  }, []);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen); // Toggle modal visibility
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/brand/logo.png")}
                style={{ width: '150px', height: '40px' }}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/argon-react.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem className="navbar-nav-hover align-items-lg-center">
                  <span className="text-white ml-1">Home</span>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-3">
                  <span className="text-white ml-1">Products</span>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-3">
                  <span className="text-white ml-1" onClick={toggleModal}>
                    Pricing
                  </span>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-3">
                  <span className="text-white ml-1">About</span>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-3">
                  <span className="text-white ml-1">Contact</span>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-2">
                  <a href="https://dash.sagasoft.io/sagasuite/signin" target="_blank" rel="noopener noreferrer">
                    <span className="text-white ml-1">Login</span>
                  </a>
                </NavItem>

                <NavItem className="d-none d-lg-block ml-lg-3">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="https://dash.sagasoft.io/sagasuite/signup"
                    target="_blank"
                  >
                    <span className="nav-link-inner text-dark ml-1">
                      Get free account
                    </span>
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>

      {/* Modal Implementation */}
      <Modal size="lg" isOpen={modalOpen} toggle={toggleModal}>
        <div className="modal-header">
          <h5 className="modal-title">Pricing</h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={toggleModal}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
        <Row xs={1} sm={2} md={3} className="g-4 mt-5">
                    <Col>
                        <Card className="card-lift--hover shadow border-0" style={{ height: "30rem" }}>
                            <CardBody className="text-center d-flex flex-column justify-content-center align-items-center">
                                <CardTitle style={{ fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '2px solid #333', paddingBottom: '10px', width: '100%' }}>Basic</CardTitle>
                                <CardText style={{ fontSize: '1.1rem' }}>
                                    Features
                                </CardText>
                                <ul style={{ listStyle: "none", padding: 0, fontSize: '1rem' }}>
                                    <li>Total Mail ID</li>
                                    <li>10</li>
                                    <li>MailBox Size per user</li>
                                    <li>3GB</li>
                                    <li>Total Aliase Mail ID</li>
                                    <li>30</li>
                                    <li>Total Drive Size</li>
                                    <li>150GB</li>
                                </ul>

                                <Button color="primary"
                                    href="https://dash.sagasoft.io/sagasuite/signup"
                                    target="_blank"
                                >Basic</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="card-lift--hover shadow border-0" style={{ height: "30rem" }}>
                            <CardBody className="text-center d-flex flex-column justify-content-center align-items-center">
                                <CardTitle style={{ fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '2px solid #333', paddingBottom: '10px', width: '100%' }}>Standard</CardTitle>
                                <CardText style={{ fontSize: '1.1rem' }}>
                                    Features
                                </CardText>
                                <ul style={{ listStyle: "none", padding: 0, fontSize: '1rem' }}>
                                    <li>Total Mail ID</li>
                                    <li>30</li>
                                    <li>MailBox Size per user</li>
                                    <li>3GB</li>
                                    <li>Total Aliase Mail ID</li>
                                    <li>60</li>
                                    <li>Total Drive Size</li>
                                    <li>500GB</li>
                                </ul>
                                <Button color="success"
                                    href="https://dash.sagasoft.io/sagasuite/signup"
                                    target="_blank"
                                >Standard</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="card-lift--hover shadow border-0" style={{ height: "30rem" }}>
                            <CardBody className="text-center d-flex flex-column justify-content-center align-items-center">
                                <CardTitle style={{ fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '2px solid #333', paddingBottom: '10px', width: '100%' }}>Premium</CardTitle>
                                <CardText style={{ fontSize: '1.1rem' }}>
                                    Features
                                </CardText>
                                <ul style={{ listStyle: "none", padding: 0, fontSize: '1rem' }}>
                                    <li>Total Mail ID</li>
                                    <li>50</li>
                                    <li>MailBox Size per user</li>
                                    <li>3GB</li>
                                    <li>Total Aliase Mail ID</li>
                                    <li>90</li>
                                    <li>Total Drive Size</li>
                                    <li>2TB</li>
                                </ul>
                                <Button color="primary"
                                    href="https://dash.sagasoft.io/sagasuite/signup"
                                    target="_blank"
                                >Premium</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
        </div>
        <div className="modal-footer">
          <Button color="danger" onClick={toggleModal}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default DemoNavbar;
