import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const CategoryMenu = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <>
      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="light" id="filterDropdown">
          Category: {selectedCategory}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleCategoryChange("All")}>
            All
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange("Bracelet")}>
            Bracelet
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange("Cufflink")}>
            Cufflink
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange("Earring")}>
            Earring
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange("Necklace")}>
            Necklace
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange("Ring")}>
            Ring
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default CategoryMenu;
