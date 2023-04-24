import React, { UseState } from 'react'
import { Row, Col, Image } from 'react-bootstrap/Card'
import { addToMessage } from '../../utils/addToMessage'


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
}



const productCard = () => {

  const addItem = () => {
    const [items, addItem] = UseItem('');

  }

  return (
    <section className="products">
      <div style={styles.card}>
        {items.map((item) => (
          <div product={item.id} id={item.id} >
            <Row>
              <Col>
                <Image style={styles.image} src="#TEST">
                </Image>
                <button id="addTo"
                  onClick={
                    addToMessage(addItem.id)
                  }>+
                </button>
              </Col>
              <Col>
                <div>
                  <h2>
                    CARD TITLE HOLDER
                  </h2>
                  <div>
                    Description - LOREM IPSUM
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>

    </section>
  )
}

export default productCard