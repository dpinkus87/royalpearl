import Carousel from 'react-bootstrap/Carousel';
import place1 from '../../Images/anna-stampfli-7GxPOMH2Mh4-unsplash.jpeg';
import place2 from '../../Images/sabrianna-CCpQ12CZ2Pc-unsplash.jpg';
import place3 from '../../Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg'

function PriorCollectionCarousel() {
  return (

    
    <Carousel
    >
      <Carousel.Item style={{ maxHeight: "45rem", objectFit: "cover" }}
      >
        <img
          className="d-block w-100"
          src={place1}
          alt="First slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ maxHeight: "45rem", objectFit: "cover" }}>
        <img
          className="d-block w-100"
          src={place2}
          alt="Second slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ maxHeight: "45rem", objectFit: "cover" }}>
        <img
          className="d-block w-100"
          src={place3}
          alt="Third slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default PriorCollectionCarousel;