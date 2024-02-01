import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { MultiSelectIngredientsProps } from '../../files/interfaces';

const MultiSelectIngredients: React.FC = ({handleSelect, handleDeselect}:MultiSelectIngredientsProps) => {
 

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