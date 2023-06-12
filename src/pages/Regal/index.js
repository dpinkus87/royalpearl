import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "../../App.css";
import hero from "../../Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg";
import bracelet from "../../Images/bracelet.jpeg";
import earrings from "../../Images/earrings.jpeg";
import Footer from "../../components/Footer";

const Regal = () => {
  return (
    <div>
      <br></br>
      <h1 className="header">Regal Jewelry</h1>
      <br></br>

      <div className="justify-content-center align-items-center m-auto">
        <a
          href="../"
          style={{
            textDecoration: "none",
            color: "white",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <h5>Royal Pearl</h5>
        </a>
      </div>

      <br></br>
      <Container fluid="true">
        <Row>
          <Col className="m-0 p-0 ">
            <Image
              className="heroImage"
              src={hero}
              fluid="true"
              style={{ objectFit: "cover", height: "500px" }}
            />
          </Col>
        </Row>

        <Row
          className="hero-text mt-5"
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: "10rem",
            right: "3rem",
            bottom: "15rem",
            height: "auto",
          }}
        >
          Welcome to Regal Jewelry, where we specialize in crafting exquisite
          custom jewelry pieces that reflect your unique style and personality.
          With a passion for exceptional craftsmanship and attention to detail,
          we strive to create stunning jewelry that surpasses your expectations.
          Whether you're looking for a one-of-a-kind engagement ring, a
          sentimental necklace, or personalized earrings, our skilled artisans
          are here to bring your vision to life.{" "}
        </Row>
      </Container>

      <br></br>
      <br></br>

      <Container fluid="true">
        <Row>
          <Col className="m-0 p-0 ">
            <Image
              className="heroImage"
              src={bracelet}
              fluid="true"
              style={{ objectFit: "cover", height: "500px", width: "auto", alignItems: "center" }}
            />
          </Col>
          <Col xs={8}>
            <h4 className="text-white text-center py-8" >
              Discover Regal Jewelry's curated collections, showcasing timeless
              elegance, modern chic, and vintage-inspired designs that cater to
              diverse style preferences, allowing you to find the perfect piece
              that tells your unique story.
            </h4>
          </Col>
        </Row>
      </Container>

      <br></br>
      <br></br>

      <Container fluid="true">
        <Row>
          <Col xs={8}>
            <h4 className="text-white text-center py-8">
              Regal Jewelry offers curated collections that embody timeless
              elegance, modern chic, and vintage-inspired designs. Our Classic
              Elegance collection features sophisticated pieces for everyday
              wear and special occasions. The Modern Chic collection showcases
              minimalist designs with contemporary flair. For those captivated
              by vintage charm, our Vintage Inspired collection presents ornate
              and intricately detailed pieces that evoke nostalgia. Explore our
              collections to find a jewelry piece that resonates with your style
              and story.
            </h4>
          </Col>
          <Col className="m-0 p-0 ">
            <Image
              className="heroImage"
              src={earrings}
              fluid="true"
              style={{ objectFit: "cover", height: "500px", width: "auto" }}
            />
          </Col>
        </Row>
        <br></br>
        <br></br>
      </Container>

      <Footer />
    </div>
  );
};

export default Regal;
