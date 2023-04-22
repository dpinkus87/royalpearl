import "../../App.css";
import hero from "../../Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg";
import archives from "../../Images/anna-stampfli-7GxPOMH2Mh4-unsplash.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return( 
<div className="home">
{/* Hero cover image */}
<Container>
  <Row>
    <Col className="m-0 p-0 ">
      <Image className='heroImage' src={hero} fluid />
    </Col>

  </Row>

  <Row className='hero-text'>TEST</Row>
</Container>

{/* Previous collections image / link */}
<Container>
  <Row className="m-0 p-0">
    <Col>
      <Image className="m-0 p-0" src={archives} fluid />
    </Col>
  </Row>
</Container>

{/* New arrivals & Best of the best cards / links */}
<div>
  <Container>
    <Row >
      <Col sm={6}> 
        <Card className="border-0">
          <Card.Img src={hero} className='rounded-0'></Card.Img>
          <Card.Body className="newArrivalCard text-white bg-black text-center 25">
            <u> New Arrivals</u></Card.Body>
        </Card>
      </Col>

      <Col sm={6}>
        <Card className="border-0">
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
  <Container>
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
<Container>
<h2 className="text-white bg-black text-center">Upcoming Shows</h2>
</Container>
</div>

</div>
    )
}

export default Home;