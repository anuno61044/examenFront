import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const MultiSelectIngredients: React.FC = () => {
 const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

 const options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 2', 'Option 3', 'Option 2', 'Option 3', 'Option 2', 'Option 3', 'Option 2', 'Option 3', 'Option 2', 'Option 3', 'Option 2', 'Option 3', 'Option 2', 'Option 3'];

 const handleSelect = (option: string) => {
    setSelectedOptions([...selectedOptions, option]);
 };

 const handleDeselect = (option: string) => {
    setSelectedOptions(selectedOptions.filter(opt => opt !== option));
 };

 return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item 
            key={index} 
            onClick={() => selectedOptions.includes(option) ? handleDeselect(option) : handleSelect(option)}
            active={selectedOptions.includes(option)}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
 );
};

export default MultiSelectIngredients;