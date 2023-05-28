import Carousel from 'react-bootstrap/Carousel';
import place1 from '../../Images/anna-stampfli-7GxPOMH2Mh4-unsplash.jpeg';
import place2 from '../../Images/sabrianna-CCpQ12CZ2Pc-unsplash.jpg';
import place3 from '../../Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg'

function PriorCollectionCarousel() {
  return (
    <Carousel 
          
>
      <Carousel.Item>
        <img
        objectFit= "cover"
        width={900} height={500} 
          className="d-block w-100"
          src={place1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
   
   width={900} height={500}
          className="d-block w-100"
          src={place2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={900} height={500} 
          className="d-block w-100"
          src={place3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default PriorCollectionCarousel;