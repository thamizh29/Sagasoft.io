import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const Hero = () => {
    const [collapseClasses, setCollapseClasses] = useState("");
    const [collapseOpen, setCollapseOpen] = useState(false);
  
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
  
  return (
    <>
    <div className="position-relative">
      {/* Hero for FREE version */}
      <section className="section section-hero section-shaped">
        {/* Background circles */}
        <div className="shape shape-style-1 shape-primary">
          <span className="span-150" />
          <span className="span-50" />
          <span className="span-50" />
          <span className="span-75" />
          <span className="span-100" />
          <span className="span-75" />
          <span className="span-50" />
          <span className="span-100" />
          <span className="span-50" />
          <span className="span-100" />
        </div>
        <Container style={{ marginTop: '100px' }} className="shape-container d-flex align-items-center py-lg">
          <div className="col px-0">
            <Row className="align-items-center justify-content-center">
              <Col className="text-center" lg="6">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/brand/white-logo.png")}
                  style={{ width: "1000px" }}
                />
                <p style={{ marginTop: '50px' }} className="lead text-white">
                  A beautiful Design System for Bootstrap 4. It's Free and
                  Open Source.
                </p>
                <div className="btn-wrapper mt-5">
                  <Button
                    className="btn-white btn-icon mb-3 mb-sm-0"
                    color="default"
                    style={{ width: '180px' }}
                    href="https://dash.sagasoft.io/sagasuite/signup"
                    size="lg"
                    target="_blank"
                  >
                    <span className="btn-inner--text">Create account</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </section>
    </div>
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
                  <span className="text-white ml-1">Pricing</span>
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
    </>
    </>
  );
};

export default Hero;
