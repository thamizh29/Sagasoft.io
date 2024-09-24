
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import Carousel from "./IndexSections/Carousel.js";
//import Icons from "./IndexSections/Icons.js";
import AppCard from "./cards/cards.js";
import ImageCard from "./cards/card-2.js";
import Plans from "./IndexSections/plans.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <AppCard />
          <section className="section section-components">
            <Container>
            </Container>
          </section>
          <Carousel />
          <ImageCard/>
          <Plans/>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
