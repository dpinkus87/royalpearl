import React, { Row, Col, Image } from 'react';
import addToMessage from '../../utils'

const styles = {
  card: {
    color: 'black',
    textSize: '12pt',
    maxWidth: '250px',
    zIndex: '0'
  },
  heading: {
    background: 'white',
    fontSize: '12pt',
    padding: '5px'
  },
  text: {
    fontSize: '12pt',
    color: 'black',
    backgroundColor: 'white'
  },
  image: {
    maxWidth: '2rem'
  },
  button: {
    zIndex: '1',
    margin: '5px'
  }
};

function ProductCard(item) {
const { 
  name, 
  category, 
  image
 } = item;

  return (
    <section>
        <div style={styles.card}>
          <Row>
            <Col>
              <Image style={styles.image} src="#TEST"></Image>
              <button onClick={() => addToMessage(item.name)}>+</button>
            </Col>
            <Col>
              <div>
                <h2>SKU information</h2>
                <div>Description - LOREM IPSUM</div>
              </div>
            </Col>
          </Row>
        </div>
    </section>
  );
}

export default ProductCard;
