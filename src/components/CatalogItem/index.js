/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import { db } from "../../config/firebase";
import noImage from "../../Images/noimage-1.png";
import { collection, doc, getDoc } from "firebase/firestore";
import { LazyLoadComponent } from "react-lazy-load-image-component";


const CatalogItem = ({ image, name, description, category }) => {
  const [product, setProducts] = useState([]);
  const [imageFromDB, setImageFromDB] = useState([]);

  const handleClick = () => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    storedItems.push(name);
    localStorage.setItem("items", JSON.stringify(storedItems));
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    if (typeof image === "string") {
      setImageFromDB(image.split(","));
    }
  }, [image]);

  useEffect(() => {
    if (imageFromDB.length === 0) {
      const getProduct = async () => {
        try {
          const productRef = doc(collection(db, "products"), name);
          const docSnapshot = await getDoc(productRef);
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            if (data && data.image) {
              setImageFromDB(data.image.split(","));
            }
          }
        } catch (error) {
          console.log("Error getting document:", error);
        }
      };
  
      getProduct();
    }
  }, [imageFromDB, name]);

  const handleImageError = (index) => {
    const newImageFromDB = [...imageFromDB];
    newImageFromDB[index] = noImage;
    setImageFromDB(newImageFromDB);
  };

  return (
    <Card   className="rounded-0 position-relative m-1"
    style={{
      maxHeight: '11rem',
      background: 'black',
      color: 'white',
      border: '2px solid white' // Adjust the border thickness as desired
    }} >
      <Row >
        <Col>
          <Button
            data-testid="button"
            value={product}
            onChange={(e) => setProducts(e.target.value)}
            onClick={handleClick}
            style={{
              width: "3rem",
              height: "3rem",
              position: "absolute",
              top: "0rem",
              left: "0rem",
              background: "none",
              border: "none",
              zIndex: "999",
            }}
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />

              
            </svg>
          </Button>

          {imageFromDB.length > 0 && (
            <Carousel interval={null} variant="dark" indicators={false} style={{ objectFit: "cover", height: '10rem'}}>
              {imageFromDB.map((url, i) => (
                <Carousel.Item key={i} >
                  {url.includes(".MP4") ? (   
                    <LazyLoadComponent>             
                    <ReactPlayer
                      url={url}
                      playing={true}
                      controls={true}
                      style={{ height:"10rem"}}
                      className="rounded-0 d-block w-100 h-auto mb-0 pb-0"
                    />             
                    </LazyLoadComponent>    
                  ) : (
                    <img
                      src={url}
                      alt={`Image ${i + 1}`}
                      style={{ objectFit: "cover", height: "10rem" }}
                      className="rounded-0 d-block w-100 mb-0 pb-0"
                      onError={() => handleImageError(i)}
                    />
                  )}
                </Carousel.Item>
              ))}
              {imageFromDB.length === 0 && (
                <Carousel.Item>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: "10rem" }}>
                    <img
                      src={noImage}
                      alt="Placeholder Image"
                      style={{ objectFit: "cover", height: "10rem" }}
                      className="rounded-0 d-block w-100 mb-0 pb-0"
                    />
                  </div>
                </Carousel.Item>
              )}
            </Carousel>
          )}

        </Col>

        <Col className="pt-0">
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-0 pb-1">
              <span className="fs-3 fw-bold">{name}</span>
            </Card.Title>

            <Card.Text style={{ fontSize: '8pt'}}>{description}</Card.Text>
            {/* <Card.Text style={{ fontSize: '10pt'}}>{category}</Card.Text> */}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CatalogItem;