import React, { useState } from 'react';
import './FruitCutting.css';

const FruitCutting = () => {
  const [fruits, setFruits] = useState([
    { name: 'Apple', isCut: false },
    { name: 'Orange', isCut: false },
    { name: 'Banana', isCut: false },
    // Add more fruits as needed
  ]);

  const handleCutFruit = (index) => {
    const updatedFruits = [...fruits];
    updatedFruits[index].isCut = true;
    setFruits(updatedFruits);
  };

  return (
    <div className="fruit-cutting-container">
      {fruits.map((fruit, index) => (
        <div key={index} className={`fruit ${fruit.isCut ? 'cut' : ''}`} onClick={() => handleCutFruit(index)}>
          <img src={`/images/${fruit.name.toLowerCase()}.png`} alt={fruit.name} />
          <p>{fruit.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FruitCutting;
