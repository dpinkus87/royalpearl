import React from "react";
import Button from "react-bootstrap/Button";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const TopButton = () => {
  return (
    <Button
      variant="primary"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "30px",
        zIndex: "99",
        padding: "15px"
      }}
      onClick={scrollToTop}
      title="Go to top"
    >
      Top
    </Button>
  );
};

export default TopButton;
