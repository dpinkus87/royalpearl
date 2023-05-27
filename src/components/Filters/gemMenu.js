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
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("Akoya Pearl")}>
            Akoya Pearl
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("Baroque Pearl")}>
            Baroque Pearl
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange  ("Cultured Pearl")}>
            Cultured Pearl
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("Diamond")}>
            Diamond
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("Emerald")}>
            Emerald
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("Pearl")}>
            Pearl
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("Sapphire")}>
            Sapphire
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("South Sea Pearl")}>
            South Sea Pearl
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("Tahitian Pearl")}>
            Tahitian Pearl
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default GemMenu;
