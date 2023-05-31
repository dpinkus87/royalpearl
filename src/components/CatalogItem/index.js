import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Card, Button, Carousel } from "react-bootstrap";
import ReactPlayer from "react-player/lazy";
import { db } from "../../config/firebase";
import noImage from "../../Images/noimage-1.png";
import { collection, doc, getDoc } from "firebase/firestore";
import { LazyLoadComponent } from "react-lazy-load-image-component";


const CatalogItem = ({ image, name, description, category }) => {
  const [product, setProducts] = useState([]);
  const [imageFromDB, setImageFromDB] = useState([]);
  const showButtons = "VisibleOnHover";
  const videoRefs = useRef([]);
  const [inViewport, setInViewport] = useState(false);

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

  const handleVideoReady = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].getInternalPlayer().pause();
    }
  };

  const filteredImageFromDB = imageFromDB.filter(url => url.includes(".MP4"));

  const handleIntersection = (entries) => {
    const isVisible = entries[0].isIntersecting;
    setInViewport(isVisible);
  };

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (videoRefs.current.length > 0) {
      observer.observe(videoRefs.current[0]);
    }

    return () => {
      if (videoRefs.current.length > 0) {
        observer.unobserve(videoRefs.current[0]);
      }
    };
  }, []);

  return (
    <Card className="bg-black text-white border-light rounded-0 position-relative m-2">
      <Row>
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

          {filteredImageFromDB.length > 0 && (
            <Carousel interval={null} variant="dark" indicators={false} style={{ objectFit: "cover", height: '10rem'}}>
              {filteredImageFromDB.map((url, i) => (
                <Carousel.Item key={i} >
                  <LazyLoadComponent>
                    <ReactPlayer
                      ref={ref => videoRefs.current[i] = ref}
                      url={url}
                      playing={inViewport}
                      controls={true}
                      style={{ height:"10rem"}}
                      className="rounded-0 d-block w-100 h-auto mb-0 pb-0"
                      onReady={() => handleVideoReady(i)}
                    />
                  </LazyLoadComponent>
                </Carousel.Item>
              ))}
            </Carousel>
          )}

          {filteredImageFromDB.length === 0 && (
            <div className="d-flex align-items-center justify-content-center" style={{ height: "10rem" }}>
              <lazy
                src={noImage}
                alt="Placeholder Image"
                style={{ objectFit: "cover", height: "10rem" }}
                className="rounded-0 d-block w-100 mb-0 pb-0"
              />
            </div>
          )}

        </Col>

        <Col>
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
              <span className="fs-2">{name}</span>
            </Card.Title>

            <Card.Text>{description}</Card.Text>
            <Card.Text>{category}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CatalogItem;
