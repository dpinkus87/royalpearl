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
  }
}

const ColorMenu = ({ selectedColor, handleColorChange }) => {
  return (
    <>
      <Dropdown className="mb-3">
        <Dropdown.Toggle style={styles.dropdown} variant="light" id="filterDropdown">
          Color: {selectedColor}
        </Dropdown.Toggle>
        <Dropdown.Menu style={styles.dropdown}>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange("All")}>
            All
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange("black")}>
            Black
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange("gold")}>
            Gold
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange("purple")}>
            Purple
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange("red")}>
            Red
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange("rose gold")}>
            Rose Gold
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleColorChange("white")}>
            White
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ColorMenu;
