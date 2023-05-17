import React, { useEffect, useState} from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import CatalogItem from "../../components/CatalogItem";
import hero from '../../Images/sabrianna-CCpQ12CZ2Pc-unsplash.jpg'
import '../../App.css'
import Header from "../../components/Navigation";
import { productList } from "../../data";
import Footer from '../../components/Footer'
import CategoryMenu from '../../components/CategoryMenu'

import MessageOffcanvas from "../../components/MessageOffcanvas/index"
import { onSnapshot } from "firebase/firestore";


function Catalog() {
  
const [products, setProducts] = useState([]
  )
  useEffect(() => {
    const productRef = query(collection(db, 'product'), orderBy('name', "desc"))
    onSnapshot(productRef, (snapshot) => {
      setProducts(snapshot.docs.map(doc => ({
        id: doc.id
      })))
      
    })
  }, [])

  
  return (
    <>
    <Header />
    
    <MessageOffcanvas />
    <Container fluid='true' className='m-0 p-0' >
      <Row>
        <Image src={hero}  style={{objectFit: "cover", height:'500px'}} fluid/>
      </Row>
    </Container>
      <h2 className="align-items-center text-white p-2">Catalog</h2>

      <CategoryMenu />
      
      <Row xxl={4} xl={3} lg={2} md={2} sm={1} xs={1} className="g-3 p-3">
      {productList.map(item => (
        <Col key={item.id}>
        <CatalogItem {...item} />
        </Col>
      ))}
      </Row>
      <br></br>
      <Footer />
    </>
  );
}

export default Catalog;
