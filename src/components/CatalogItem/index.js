import React, { useState } from "react";
import { Row, Col, Card, Button, Carousel } from "react-bootstrap";

const CatalogItem = ({ image, name, category }) => {
  const [product, setProducts] = useState({});
  const showButtons = 'VisibleOnHover'

  const handleClick = () => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    storedItems.push(name);
    localStorage.setItem("items", JSON.stringify(storedItems));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <Card className="bg-black text-white border-light rounded-0 position-relative">
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
              top: ".5rem",
              left: ".5rem",
              background: "none",
              border: "none",
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

          <Carousel interval={null} variant='dark' indicators={false}>
            <Carousel.Item>
              <img
                className="rounded-0 d-block w-100"
                variant="top"
                src={image[0]}
                height="200px"
                style={{ objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="rounded-0 d-block w-100"
                variant="top"
                src={image[1]}
                height="200px"
                style={{ objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="rounded-0 d-block w-100"
                variant="top"
                src={image[2]}
                height="200px"
                style={{ objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <span className="fs-2">{name}</span>
            </Card.Title>
            <Card.Text>{category}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CatalogItem;
