// TODO: useState to control modal - should only show once when a user first enters site, not when they return from the same session

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import HomepageModal from "../../components/Modal";
import Header from "../../components/Navigation";

import hero from "../../Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg";
import bracelet from "../../Images/bracelet.jpeg"
import earrings from "../../Images/earrings.jpeg"
import necklace from "../../Images/NECKLACE.jpeg"
import pendant from "../../Images/pendant.jpeg"
import ring from "../../Images/ring.jpeg"
import archives from "../../Images/anna-stampfli-7GxPOMH2Mh4-unsplash.jpeg";
import Footer from '../../components/Footer'

const styles = {
    row: {
        justifyContent: 'center'
    }
}

function Home() {

    return (
        <>
            <Header />

            <div className="home">

                {/* Show Modal */}

                <HomepageModal />

                {/* TODO Hero cover image */}

                <Container fluid='true' className='m-0'>
                    <Row>
                        <Col className="m-0 p-0 " style={{ position: "relative" }}>
                            <Image className='heroImage' src={hero} fluid='true' style={{ objectFit: "cover", height: '500px' }} />
                        </Col>

                    </Row>

                    <Row className='hero-text' style={{ position: 'absolute', top: '10rem', right: '3rem', bottom: '15rem', height: '10rem' }} >Royal Pearl imports pearls from around the world while creating unique and classic designs all manufactured in Chicago Illinois</Row>
                </Container>

                <br></br>

                {/* TODO: Category Cards - update to correct query routes */}

                <div display="flex">
                    <Container display="flex" className="justify-content-space-around!">
                        <Row style={styles.row} sm={1} md={1} xs={1} lg={5} height='2rem'>

                            <Col >
                            <Link to="/Catalog?category=bracelet" style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0 bg-black">
                                        <Card.Img src={bracelet} className='rounded-0' style={{ objectFit: "cover" }}></Card.Img>
                                        <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                            <u> Bracelets</u></Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                            <Link to="/Catalog?category=earring" style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0 bg-black" >
                                        <Card.Img src={earrings} className='rounded-0' style={{ objectFit: "cover" }}></Card.Img>
                                        <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                            <u> Earrings</u></Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col >
                            <Link to="/Catalog?category=pendants" style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0 bg-black">
                                        <Card.Img src={pendant} className='rounded-0' style={{ objectFit: "cover" }}></Card.Img>
                                        <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                            <u> Pendants</u></Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col >
                            <Link to="/Catalog?category=ring" style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0 bg-black">
                                        <Card.Img src={ring} className='rounded-0' style={{ objectFit: "cover" }}></Card.Img>
                                        <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                            <u> Rings</u></Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col >
                            <Link to="/Catalog?category=Strands" style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0 bg-black">
                                        <Card.Img src={necklace} className='rounded-0' style={{ objectFit: "cover" }}></Card.Img>
                                        <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                            <u> Strands</u></Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                        </Row>
                    </Container>
                </div>

                <br></br>
                <br></br>

                {/* TODO Previous collections image / link */}
                <Container fluid='true' className="m-0">
                    <Row>
                        <Image src={archives} fluid='true' style={{ objectFit: "cover", height: '50vh' }} />
                    </Row>
                </Container>
                <br></br>
                <br></br>

                {/* TODO New arrivals & Best of the best cards / links */}
                <div display='flex'>
                    <Container display='flex' fluid='true'>
                        <Row sm={1} md={1} xs={1} lg={2} >
                            <Col >
                                <a href='../Catalog' style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0 border-bottom-0">
                                        <Row>
                                            <Image src={hero} className='rounded-0' style={{ objectFit: "cover", height: '500px' }} />
                                        </Row>
                                        <Row className="newArrivalCard text-white bg-black text-center 25">
                                            <u> New Arrivals</u></Row>
                                    </Card>
                                </a>
                            </Col>

                            <Col >
                                <a href='../Catalog' style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0">
                                    <Row>
                                        <Image src={hero} className='rounded-0' style={{ objectFit: "cover", height: '500px' }} />
                                    </Row>
                                        <Row className="newArrivalCard text-white bg-black text-center 25">
                                            <u> Most Popular</u></Row>
                                    </Card>
                                </a>
                            </Col>


                        </Row>
                    </Container>
                </div>

                <br></br>
                <br></br>

                {/* TODO About us section */}
                <div>
                    <Container fluid='true'>
                        <Row lg={2} xs={1}>
                            <Col >
                                <Image className="w-100" src={hero} />
                            </Col>

                            <Col className='justify-content-center' style={{ alignItems: "center", display: 'flex' }}>
                                <h4 className="text-white text-center py-8" >Royal Pearl, a prominent jewelry wholesaler, stands out for its expertise in offering an exquisite selection of pearl jewelry. With a dedication to quality and a focus on pearls, we provide a trusted platform to access stunning pieces that capture the essence of elegance and timeless beauty.</h4>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <br></br>
                <br></br>
                {/* TODO: format Upcoming Shows section */}
                <div>
                    <Container fluid='true' >
                        <h1 className="text-white bg-black text-center">Upcoming Shows</h1>
                        <ul className="text-white text-center" style={{ listStyle: 'none' }}>
                            <li>
                                Las Vegas - May 30th
                            </li>
                            <li>
                                New York - TEST
                            </li>
                        </ul>
                    </Container>
                    <br></br>
                    <br></br>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Home;