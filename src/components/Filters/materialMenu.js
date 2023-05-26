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

const ColorMenu = ({ selectedMaterial, handleMaterialChange }) => {
  return (
    <>
      <Dropdown className="mb-3">
        <Dropdown.Toggle style={styles.dropdown} variant="light" id="filterDropdown">
          Material: {selectedMaterial}
        </Dropdown.Toggle>
        <Dropdown.Menu style={styles.dropdown}>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleMaterialChange("All")}>
            All
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleMaterialChange("Bracelet")}>
            Bracelet
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleMaterialChange("Cufflink")}>
            Cufflink
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleMaterialChange  ("Earring")}>
            Earring
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleMaterialChange("Necklace")}>
            Necklace
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleMaterialChange("Ring")}>
            Ring
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ColorMenu;
