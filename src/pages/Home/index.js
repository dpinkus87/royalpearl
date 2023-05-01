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

const onClick = 'http://www.google.com'

const styles = {
    row: {
        justifyContent: 'center'
    }
}


function Home() {


    return (
        <div className="home">

            {/* Show Modal */}
            <HomepageModal />

            {/* Hero cover image */}
            <Container fluid className='m-0'>
                <Row>
                    <Col className="m-0 p-0 ">
                        <Image className='heroImage' src={hero} fluid style={{ objectFit: "cover"}}/>
                    </Col>

                </Row>

                <Row className='hero-text'>TEST</Row>
            </Container>

            {/* Category Cards */}
            <div display="flex">
                <Container display="flex" className="justify-content-space-around!">
                    <Row style={styles.row} sm={1} md={1} xs={1} lg={5} height='2rem'>
                        <Col>
                            <Card onClick={onClick} style={{ cursor: "pointer" }} className="border-0 bg-black">
                                <Card.Img src={earrings} className='rounded-0' style={{ objectFit: "cover"}}></Card.Img>
                                <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                    <u> Earrings</u></Card.Body>
                            </Card>
                        </Col>

                        <Col >
                            <Card onClick={onClick} style={{ cursor: "pointer" }} className="border-0 bg-black">
                                <Card.Img src={bracelet} className='rounded-0' style={{ objectFit: "cover"}}></Card.Img>
                                <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                    <u> Bracelets</u></Card.Body>
                            </Card>
                        </Col>

                        <Col >
                            <Card onClick={onClick} style={{ cursor: "pointer" }} className="border-0 bg-black">
                                <Card.Img src={necklace} className='rounded-0' style={{ objectFit: "cover"}}></Card.Img>
                                <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                    <u> Strands</u></Card.Body>
                            </Card>
                        </Col>

                        <Col >
                            <Card onClick={onClick} style={{ cursor: "pointer" }} className="border-0 bg-black">
                                <Card.Img src={pendant} className='rounded-0' style={{ objectFit: "cover"}}></Card.Img>
                                <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                    <u> Pendants</u></Card.Body>
                            </Card>
                        </Col>

                        <Col >
                            <Card onClick={onClick} style={{ cursor: "pointer" }} className="border-0 bg-black">
                                <Card.Img src={ring} className='rounded-0' style={{ objectFit: "cover"}}></Card.Img>
                                <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                    <u> Rings</u></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <br></br>
            <br></br>

            {/* Previous collections image / link */}
            <Container fluid>
                <Row >
                    <Col className="m-0 p-0">
                        <Image className="heroimage" src={archives} fluid />
                    </Col>
                </Row>
            </Container>

            {/* New arrivals & Best of the best cards / links */}
            <div>
                <Container>
                    <Row >
                        <Col sm={6}>
                            <Card onClick={onClick} style={{ cursor: "pointer" }} className="border-0">
                                <Card.Img src={hero} className='rounded-0'></Card.Img>
                                <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                    <u> New Arrivals</u></Card.Body>
                            </Card>
                        </Col>

                        <Col sm={6}>
                            <Card onClick={onClick} style={{ cursor: "pointer" }} className="border-0">
                                <Card.Img src={hero} className='rounded-0'></Card.Img>
                                <Card.Body className="newArrivalCard text-white bg-black text-center 25">
                                    <u> New Arrivals</u></Card.Body>
                            </Card>
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

            {/* Upcoming Shows */}
            <div>
                <Container fluid>
                    <h2 className="text-white bg-black text-center">Upcoming Shows</h2>
                </Container>
            </div>

        </div>
    )
}

export default Home;