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
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("akoya pearl")}>
            Akoya Pearl
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("baroque pearl")}>
            Baroque Pearl
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange  ("cultured pearl")}>
            Cultured Pearl
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("diamond")}>
            Diamond
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("emerald")}>
            Emerald
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("pearl")}>
            Pearl
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("sapphire")}>
            Sapphire
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("south sea pearl")}>
            South Sea Pearl
          </Dropdown.Item>
          <Dropdown.Item style={styles.dropdown} onClick={() => handleGemChange("tahitian pearl")}>
            Tahitian Pearl
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default GemMenu;
