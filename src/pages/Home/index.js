// TODO: useState to control modal - should only show once when a user first enters site, not when they return from the same session

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import HomepageModal from "../../components/Modal";
import Header from "../../components/Navigation";

import hero from "../../Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg";
import bracelet from "../../Images/bracelet.jpeg";
import earrings from "../../Images/earrings.jpeg";
import necklace from "../../Images/NECKLACE.jpeg";
import pendant from "../../Images/pendant.jpeg";
import ring from "../../Images/ring.jpeg";
import archives from "../../Images/anna-stampfli-7GxPOMH2Mh4-unsplash.jpeg";
import necklaceModel from "../../Images/necklaceModel.png";
import earringModel from "../../Images/EarringModel.png";
import aboutImage from "../../Images/tiffany-anthony-09bKHOZ29us-unsplash.jpeg";
import Footer from "../../components/Footer";
import PriorCollectionCarousel from "../../components/PriorCollectionCarousel";

const styles = {
  row: {
    justifyContent: "center",
  },
};

function Home() {
  return (
    <>
      <Header />

      <div className="home">
        {/* Show Modal */}

        <HomepageModal />

        <Container fluid="true" className="m-0">
          <Row>
            <Col className="m-0 p-0 " style={{ position: "relative" }}>
              <Image
                className="heroImage"
                src={hero}
                fluid="true"
                style={{
                  objectFit: "cover",
                  maxHeight: "500px",
                  minHeight: "200px",
                }}
              />
            </Col>
          </Row>

          <Row
            className="hero-text m-4 p-4"
            style={{
              position: "absolute",
              top: "10rem",
              right: "3rem",
              bottom: "15rem",
              height: "10rem",
              maxWidth: "45%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Royal Pearl imports pearls from around the world and creates unique
            and classic designs, all manufactured in Chicago Illinois
          </Row>
        </Container>

        <br></br>

        <div
          className="align-items-center justify-content-center text-white"
          style={{ alignItems: "center", display: "flex" }}
        >
          <h1 className="align-items-center justify-content-center text-white p-2">
            Shop By Category
          </h1>
        </div>

        <br></br>

        <div display="flex">
          <Container display="flex" className="justify-content-space-around!">
            <Row style={styles.row} sm={1} md={1} xs={1} lg={5} height="2rem">
              <Col>
                <Link
                  Link
                  to="/catalog?category=bracelet"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <Card
                    style={{ cursor: "pointer" }}
                    className="border-0 bg-black"
                  >
                    <Card.Img
                      src={bracelet}
                      className="rounded-0"
                      style={{ objectFit: "cover" }}
                    ></Card.Img>
                    <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                      <u> Bracelets</u>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

              <Col>
                <Link
                  to="/catalog?category=Earring"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    style={{ cursor: "pointer" }}
                    className="border-0 bg-black"
                  >
                    <Card.Img
                      src={earrings}
                      className="rounded-0"
                      style={{ objectFit: "cover" }}
                    ></Card.Img>
                    <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                      <u> Earrings</u>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

              <Col>
                <Link
                  to="/catalog?category=Pendant"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    style={{ cursor: "pointer" }}
                    className="border-0 bg-black"
                  >
                    <Card.Img
                      src={pendant}
                      className="rounded-0"
                      style={{ objectFit: "cover" }}
                    ></Card.Img>
                    <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                      <u> Pendants</u>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

              <Col>
                <Link
                  to="/catalog?category=Ring"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    style={{ cursor: "pointer" }}
                    className="border-0 bg-black"
                  >
                    <Card.Img
                      src={ring}
                      className="rounded-0"
                      style={{ objectFit: "cover" }}
                    ></Card.Img>
                    <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                      <u> Rings</u>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

              <Col>
                <Link
                  to="/catalog?category=Strand"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    style={{ cursor: "pointer" }}
                    className="border-0 bg-black"
                  >
                    <Card.Img
                      src={necklace}
                      className="rounded-0"
                      style={{ objectFit: "cover" }}
                    ></Card.Img>
                    <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                      <u> Strands</u>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        <br></br>
        <br></br>

        {/* TODO Previous collections image / link */}
        <div
          className="align-items-center justify-content-center text-white"
          style={{ alignItems: "center", display: "flex" }}
        >
          <h1 className="align-items-center justify-content-center text-white p-2">
            Prior Pieces
          </h1>
        </div>

        <br></br>
        <Container fluid="true" className="m-0">
          <PriorCollectionCarousel />
        </Container>
        <br></br>
        <br></br>
        <br></br>

        {/* TODO New arrivals & Best of the best cards / links */}

        <div display="flex">
          <Container display="flex" fluid="true">
            <Row sm={1} md={1} xs={1} lg={2}>
              <Col>
                <a href="../Catalog" style={{ textDecoration: "none" }}>
                  <div
                    style={{ cursor: "pointer" }}
                    className="border-0 border-bottom-0"
                  >
                    <Row>
                      <Image
                        src={earringModel}
                        className="rounded-0"
                        style={{ objectFit: "cover", height: "500px" }}
                      />
                    </Row>
                    <br></br>
                    <Row className="newArrivalCard text-white bg-black text-center 25">
                      <u> New Arrivals</u>
                    </Row>
                  </div>
                </a>
              </Col>

              <Col>
                <a href="../Catalog" style={{ textDecoration: "none" }}>
                  <div style={{ cursor: "pointer" }} className="border-0">
                    <Row>
                      <Image
                        src={necklaceModel}
                        className="rounded-0"
                        style={{ objectFit: "cover", height: "500px" }}
                      />
                    </Row>
                    <br></br>
                    <Row className="newArrivalCard text-white bg-black text-center 25">
                      <u> Most Popular</u>
                    </Row>
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </div>

        <br></br>
        <br></br>
        <br></br>

        {/* About us section */}
        <div>
          <Container fluid="true">
            <Row lg={2} xs={1}>
              <Col lg={8}>
                <Image
                  className="w-100"
                  style={{ maxHeight: "35rem", objectFit: "cover" }}
                  src={aboutImage}
                />
              </Col>

              <Col
                lg={4}
                className="py-8"
                style={{
                  alignItems: "center",
                  display: "flex",
                  color: "white",
                  textAlign: "center",
                  textJustify: "auto",
                }}
              >
                <Row>
                  <h1> About Us</h1>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <p>
                    Royal Pearl, a prominent jewelry wholesaler, stands out for
                    its expertise in offering an exquisite selection of pearl
                    jewelry. With a dedication to quality and a focus on pearls,
                    we provide a trusted platform to access stunning pieces that
                    capture the essence of elegance and timeless beauty.
                  </p>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <br></br>
        <br></br>
        <div>
          <Container fluid="true">
            <h1 className="text-white bg-black text-center">Upcoming Shows</h1>
            <br></br>
            <ul
              className="text-white text-center"
              style={{ listStyle: "none", fontSize: "18pt" }}
            >
              <li>Las Vegas - June 2nd, 2023</li>
            </ul>
          </Container>
          <br></br>
          <br></br>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
