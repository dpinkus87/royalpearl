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

const GemMenu = ({ selectedGem, handleGemChange }) => {
  return (
    <>
      <Dropdown className="mb-3">
        <Dropdown.Toggle style={styles.dropdown} variant="light" id="filterDropdown">
          Gem: {selectedGem}
        </Dropdown.Toggle>
        <Dropdown.Menu style={styles.dropdown}>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("All")}>
            All
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("Bracelet")}>
            Bracelet
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("Cufflink")}>
            Cufflink
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange  ("Earring")}>
            Earring
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("Necklace")}>
            Necklace
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("Ring")}>
            Ring
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default GemMenu;
