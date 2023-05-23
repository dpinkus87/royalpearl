import React, { useState } from "react";
import { ListGroup, Dropdown, Button } from "react-bootstrap";

const ColorMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("All");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredItems = [
    { id: 1, name: "Item 1", category: "Category A" },
    { id: 2, name: "Item 2", category: "Category B" },
    { id: 3, name: "Item 3", category: "Category A" },
    { id: 4, name: "Item 4", category: "Category C" },
    { id: 5, name: "Item 5", category: "Category B" },
  ];

  const filteredList = filter === "All"
    ? filteredItems
    : filteredItems.filter(item => item.category === filter);

  return (
    <>
      <Dropdown className="mb-3 d-inline-block">
        <Dropdown.Toggle variant="light" id="filterDropdown" >
          Color: {filter}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ minWidth:'100%'}}>
          <Dropdown.Item  onClick={() => handleFilterChange("All")}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("black")}>Black</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("gold")}>Gold</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("purple")}>Purple</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("red")}>Red</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("rose gold")}>Rose Gold</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("white")}>White</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* <ListGroup>
        {filteredList.map((product) => (
          <ListGroup.Item
            key={product.id}
            action
            active={selectedItem === product.id}
            onClick={() => handleItemClick(product.id)}
          >
            {product.name}
          </ListGroup.Item>
        ))}
      </ListGroup> */}

    </>
  );
};

export default ColorMenu;
