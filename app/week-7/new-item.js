import React, { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const incrementQuantity = () => setQuantity(prev => Math.min(prev + 1, 99)); 
  const decrementQuantity = () => setQuantity(prev => Math.max(prev - 1, 1));

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem({ name, quantity, category });
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      marginBottom: '20px',
      padding: '20px',
      backgroundColor: '#131722',
      borderRadius: '10px',
      maxWidth: '400px',
    }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Item name"
        style={{
          padding: '12px',
          backgroundColor: '#1E2230',
          color: '#c7c7c7',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          outline: 'none'
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', backgroundColor: '#1E2230', borderRadius: '8px', padding: '5px' }}>
          <button
            type="button"
            onClick={decrementQuantity}
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: '#6c757d',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            &minus;
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            style={{
              width: '40px',
              textAlign: 'center',
              padding: '5px',
              backgroundColor: '#1E2230',
              color: '#c7c7c7',
              border: 'none',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button
            type="button"
            onClick={incrementQuantity}
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: '#3498db',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            +
          </button>
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            flex: '1',
            padding: '10px',
            backgroundColor: '#1E2230',
            color: '#c7c7c7',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            outline: 'none',
            appearance: 'none' 
          }}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        style={{
          padding: '12px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem',
          textAlign: 'center'
        }}
      >
        Add Item
      </button>
    </form>
  );
}
