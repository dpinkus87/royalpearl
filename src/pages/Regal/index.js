import React from "react";
import { Container, Col, Row, Image, Carousel } from "react-bootstrap";
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
          <p>
            Welcome to Regal Jewelry, where we specialize in crafting exquisite
            custom jewelry pieces that reflect your unique style and
            personality.{" "}
          </p>
        </Row>
      </Container>

      <div style={{ background: "white" }}>
      <br></br>
        <Container style={{ background: "white" }}>
          <Row>
            <p>
              Discover Regal Jewelry's curated collections, showcasing timeless
              elegance, modern chic, and vintage-inspired designs that cater to
              diverse style preferences, allowing you to find the perfect piece
              that tells your unique story.
            </p>
            <p>
              From sophisticated pieces for everyday wear and special occasions,
              to minimalist designs with contemporary flair, or a more vintage
              inspired design, we can create a jewelry piece that resonates with
              your style and story.
            </p>
          </Row>
        </Container>
        <br></br>
      </div>

      <Carousel variant="dark" style={{ background: "white" }}>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="d-block"
              style={{ height: "25rem", objectFit: "cover" }}
              src={earrings}
              alt="First slide"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="d-block"
              style={{ height: "25rem", objectFit: "cover" }}
              src={bracelet}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>

      <div style={{ background: "white" }} >
<br></br>
        <Container style={{ background: "white" }} >
          <Row>
            <p>
              With our meticulous craftsmanship and state-of-the-art technology,
              including Computer-Aided Design (CAD), we bring your dream jewelry
              to life with unparalleled precision and creativity.
            </p>

            <p>
              Our CAD process is at the heart of our
              innovation and expertise. Our skilled team of designers utilizes
              cutting-edge software to translate your ideas into detailed 3D
              models. This allows you to visualize your design before it even
              reaches the production stage, ensuring every intricate detail
              meets your exact specifications. With CAD, we have the flexibility
              to experiment with various materials, gemstones, and design
              elements, guaranteeing a truly customized piece that captures your
              vision.
            </p>
            <p>
              Whether you desire an elegant engagement ring, a sentimental
              pendant, or a timeless bracelet, our commitment to quality and
              craftsmanship is unmatched. From the initial concept to the final
              creation, we work closely with you to ensure your custom jewelry
              embodies your personality and aspirations. Experience the
              extraordinary and let Regal bring your dreams to
              reality with our unparalleled process.
            </p>
            <p>
              From sophisticated pieces for everyday wear and special occasions,
              to minimalist designs with contemporary flair, or a more vintage
              inspired design, we can create a jewelry piece that resonates with
              your style and story.
            </p>
          </Row>
        </Container>
        <br></br>
      </div>

      <Footer />
    </div>
  );
};

export default Regal;
