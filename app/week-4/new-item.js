"use client";
import { useState } from 'react';

function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <button 
        onClick={decrement} 
        disabled={quantity === 1} 
        style={{
          padding: '8px 16px', 
          backgroundColor: quantity === 1 ? '#ccc' : '#007bff', 
          color: 'white', 
          cursor: quantity === 1 ? 'not-allowed' : 'pointer',
          border: 'none',
          marginRight: '10px'
        }}>
        -
      </button>
      <span style={{ minWidth: '50px', textAlign: 'center' }}>{quantity}</span>
      <button 
        onClick={increment} 
        disabled={quantity === 20} 
        style={{
          padding: '8px 16px', 
          backgroundColor: quantity === 20 ? '#ccc' : '#007bff', 
          color: 'white', 
          cursor: quantity === 20 ? 'not-allowed' : 'pointer',
          border: 'none',
          marginLeft: '10px'
        }}>
        +
      </button>
    </div>
  );
}

export default NewItem;
