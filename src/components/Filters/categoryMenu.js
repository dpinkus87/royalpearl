import React, { useState } from "react";
import { ListGroup, Dropdown, Button } from "react-bootstrap";

const CategoryMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("All");
  const [ selectedCategory, setSelectedCategory] = useState('');
  const [ selectedGem, setSelectedGem ] = useState('');
  const [ selectedColor, setSelectedColor ] = useState('');
  const [ selectedMaterial, setSelectedMaterial ] = useState('')

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
      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="light" id="filterDropdown">
          Category: {filter}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilterChange("All")}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("bracelet")}>Bracelet</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("cufflink")}>Cufflink</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("earring")}>Earring</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("necklace")}>Pendant</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("Ring")}>Ring</Dropdown.Item>
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

export default CategoryMenu;
