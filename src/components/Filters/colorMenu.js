import React from "react";
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
  },
  dropdownMenu: {
    border: "1",
    borderColor: "white",
    borderRadius: "0",
    borderTop: "1"
  }
}

const ColorMenu = ({ selectedColor, handleColorChange }) => {
  return (
    <>
      <Dropdown className="mb-3">
        <Dropdown.Toggle style={styles.dropdown} variant="light" id="filterDropdown">
          Color: {selectedColor}
        </Dropdown.Toggle>
        <Dropdown.Menu style={styles.dropdownMenu}>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange("All")}>
            All
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange("Bracelet")}>
            Bracelet
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange("Cufflink")}>
            Cufflink
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange  ("Earring")}>
            Earring
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange("Necklace")}>
            Necklace
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange("Ring")}>
            Ring
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ColorMenu;
