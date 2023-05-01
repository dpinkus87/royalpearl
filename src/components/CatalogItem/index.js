import React from 'react'
import { Card, Col, Row }  from 'react-bootstrap'


const CatalogItem = ( {image, name, category}) => {
  return (
    <Card className='bg-black text-white border-1 border-light rounded-0'>
    <Row>
<Col lg={7} md={7} sm={7}>
    <Card.Img 
      variant='top' 
      src={image} 
      height="200px" 
      style={{ objectFit: "cover" }}
      />
</Col>
  <Col> 
  <Card.Body className='d-flex flex-column '>
  <Card.Title className='"d-flex justify-content-space-between align-items-baseline mb-4'>
    <span className='fs=2'>{name}</span>
  </Card.Title>
  <Card.Text>
    {category}
  </Card.Text>
  </Card.Body>
  </Col>
</Row>
    </Card>
  )
}

export default CatalogItem