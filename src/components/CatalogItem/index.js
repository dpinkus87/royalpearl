import React from 'react'
import { Card, Col} from 'react-bootstrap'


const CatalogItem = ( {image}) => {
  return (
    <Card>
<Col>
    <Card.Img 
      variant='side' 
      src={image} 
      height="200px" 
      style={{ objectFit: "cover"}}
      />
</Col>
  

    </Card>
  )
}

export default CatalogItem