import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import useProduct from '../../utils/addToLocalStorage';

const CatalogItem = ({ image, name, category }) => {
  const { handleAddProduct } = useProduct();

  return (
    <Card className='bg-black text-white border-1 border-light rounded-0 position-relative'>
      <Row>
        <Col lg={7} md={7} sm={7} xs={7}>
          <Button
            onClick={() => handleAddProduct({ name })}
            style={{
              width: '3rem',
              height: '3rem',
              position: 'absolute',
              top: '.5rem',
              left: '.5rem',
              background: 'none',
              border: 'none',
            }}
            className='rounded-circle'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
            </svg>
          </Button>
          <Card.Img
            className='rounded-0'
            variant='top'
            src={image}
            height="200px"
            style={{ objectFit: 'cover' }}
          />
        </Col>
        <Col>
          <Card.Body className='d-flex flex-column'>
            <Card.Title
              className='"d-flex justify-content-space-between align-items-baseline mb-4'
            >
              <span className='fs=2'>{name}</span>
            </Card.Title>
            <Card.Text>
              {category}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CatalogItem;
