import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const styles = {
  dropdown: {
    backgroundColor: "black",
    color: "white",
    borderBottom: '1',
    borderTop: "0",
    borderRight: "0",
    borderLeft: "0",
    borderRadius: "0"
  }
}

const CategoryMenu = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <>
      <Dropdown className="mb-3">
        <Dropdown.Toggle style={styles.dropdown} variant="light" id="filterDropdown">
          Category: {selectedCategory}
        </Dropdown.Toggle>
        <Dropdown.Menu style={styles.dropdown}>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleCategoryChange("All")}>
            All
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleCategoryChange("bracelet")}>
            Bracelet
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleCategoryChange("Cuff Link")}>
            Cufflink
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleCategoryChange("Earring")}>
            Earring
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleCategoryChange("Necklace")}>
            Necklace
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleCategoryChange("pendant")}>
            Pendant
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleCategoryChange("Ring")}>
            Ring
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default CategoryMenu;
