import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import { sectionIds } from "./selectionId";
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
} from "reactstrap";

const DemoNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");

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

  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  //Function to smoothly scroll to a section by its ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      //Adjust the margin Top value as needed
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  //Function to determine the active section while scrolling
  const determineActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          //Set the active link based on the section ID
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      //Call the function to determine the active section while scrolling
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);

    //Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                        src={require("assets/img/brand/logo.png")}
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
                  <span className="text-white ml-1" onClick={() => scrollToSection("home")}>Home</span>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-3">
                  <span className="text-white ml-1" onClick={() => scrollToSection("products")}>Products</span>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-3">
                  <span className="text-white ml-1" onClick={() => scrollToSection("price")}>
                    Pricing
                  </span>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-3">
                  <span className="text-white ml-1" onClick={() => scrollToSection("about")}>About</span>
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
  );
};

export default DemoNavbar;
