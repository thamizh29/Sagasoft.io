import React, { useEffect, useRef } from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import Carousel from "./IndexSections/Carousel.js";
import AppCard from "./cards/cards.js";
import ImageCard from "./cards/card-2.js";
import Plans from "./IndexSections/plans.js";

const Index = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    // Scroll to the top when the component mounts
    if (mainRef.current) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <>
      <DemoNavbar />
      <main ref={mainRef}>
        <Hero />
        <AppCard />
        <section className="section section-components">
          <Container>
            {/* Additional content can go here if needed */}
          </Container>
        </section>
        <Carousel />
        <Plans />
      </main>
      <CardsFooter />
    </>
  );
};

export default Index;
