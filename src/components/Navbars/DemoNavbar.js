
import React from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
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
                  style={{width:'150px',height:'40px'}}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
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
                    <span className="text-white ml-1">
                      Home
                    </span>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-3">
                    <span className="text-white ml-1">
                      Contact
                    </span>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-3">
                    <span className="text-white ml-1">
                      About
                    </span>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-3">
                    <span className="text-white ml-1">
                      Plans
                    </span>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-3">
                    <span className="text-white ml-1">
                      Products
                    </span>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-2">
                    <span className="text-white ml-1">
                      Login
                    </span>
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
  }
}

export default DemoNavbar;
