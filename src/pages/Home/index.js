import "../../App.css";
import HomepageModal from "../../components/Modal";
import hero from "../../Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg";
import bracelet from "../../Images/bracelet.jpeg"
import earrings from "../../Images/earrings.jpeg"
import necklace from "../../Images/NECKLACE.jpeg"
import pendant from "../../Images/pendant.jpeg"
import ring from "../../Images/ring.jpeg"
import archives from "../../Images/anna-stampfli-7GxPOMH2Mh4-unsplash.jpeg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../components/Navigation";


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
           
                {/* Hero cover image */}
                <Container fluid className='m-0'>
                    <Row>
                        <Col className="m-0 p-0 " style={{ position: "relative" }}>
                            <Image className='heroImage' src={hero} fluid style={{ objectFit: "cover", height: '500px' }} />
                        </Col>

                    </Row>

                    <Row className='hero-text' style={{ position: 'absolute', top: '10rem', right: '3rem', bottom: '15rem', height: '10rem' }} >TEST</Row>
                </Container>

                <br></br>
                {/* Category Cards */}
                <div display="flex">
                    <Container display="flex" className="justify-content-space-around!">
                        <Row style={styles.row} sm={1} md={1} xs={1} lg={5} height='2rem'>
                            <Col>
                                <a href='../Catalog' style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0 bg-black">
                                        <Card.Img src={earrings} className='rounded-0' style={{ objectFit: "cover" }}></Card.Img>
                                        <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                            <u> Earrings</u></Card.Body>
                                    </Card>
                                </a>
                            </Col>

                            <Col >
                                <a href='../Catalog' style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0 bg-black">
                                        <Card.Img src={bracelet} className='rounded-0' style={{ objectFit: "cover" }}></Card.Img>
                                        <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                            <u> Bracelets</u></Card.Body>
                                    </Card>
                                </a>
                            </Col>

                            <Col >
                                <a href='../Catalog' style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0 bg-black">
                                        <Card.Img src={necklace} className='rounded-0' style={{ objectFit: "cover" }}></Card.Img>
                                        <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                            <u> Strands</u></Card.Body>
                                    </Card>
                                </a>
                            </Col>

                            <Col >
                                <a href='../Catalog' style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0 bg-black">
                                        <Card.Img src={pendant} className='rounded-0' style={{ objectFit: "cover" }}></Card.Img>
                                        <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                            <u> Pendants</u></Card.Body>
                                    </Card>
                                </a>
                            </Col>

                            <Col >
                                <a href='../Catalog' style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0 bg-black">
                                        <Card.Img src={ring} className='rounded-0' style={{ objectFit: "cover" }}></Card.Img>
                                        <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                            <u> Rings</u></Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <br></br>
                <br></br>

                {/* Previous collections image / link */}
                <Container fluid className="m-0">
                    <Row>
                        <Image src={archives} fluid style={{ objectFit: "cover", height: '50vh' }} />
                    </Row>
                </Container>
                <br></br>
                <br></br>

                {/* New arrivals & Best of the best cards / links */}
                <div display='flex'>
                    <Container display='flex' fluid>
                        <Row sm={1} md={1} xs={1} lg={2} >
                            <Col >
                                <a href='../Catalog' style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0">
                                        <Card.Img src={hero} className='rounded-0' style={{ objectFit: "cover", height: '500px' }}></Card.Img>
                                        <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                            <u> New Arrivals</u></Card.Body>
                                    </Card>
                                </a>
                            </Col>

                            <Col >
                                <a href='../Catalog' style={{ textDecoration: 'none' }}>
                                    <Card style={{ cursor: "pointer" }} className="border-0">
                                        <Card.Img src={hero} className='rounded-0' style={{ objectFit: "cover", height: '500px' }}></Card.Img>
                                        <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                            <u> Most Popular</u></Card.Body>
                                    </Card>
                                </a>
                            </Col>


                        </Row>
                    </Container>
                </div>

                <br></br>
                <br></br>

                {/* About us section */}
                <div>
                    <Container fluid>
                        <Row>
                            <Col xs={8}>
                                <Image className="w-100" src={hero} />
                            </Col>

                            <Col xs={4}>
                                <h2 className="text-white text-center py-8">TEST</h2>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <br></br>
                <br></br>
                {/* Upcoming Shows */}
                <div>
                    <Container fluid>
                        <h2 className="text-white bg-black text-center">Upcoming Shows</h2>
                        <ul className="text-white">
                            <li>
                                Las Vegas
                            </li>
                            <li>
                                New York
                            </li>
                        </ul>
                    </Container>
                    <br></br>
                    <br></br>
                </div>

            </div>
        </>
    )
}

export default Home;