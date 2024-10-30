import React from 'react';

export default function Item({ name, quantity, category }) {
  return (
    <li style={{
      backgroundColor: '#1e1e1e',
      padding: '10px',
      borderRadius: '8px',
      marginBottom: '10px',
      color: '#fff'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}>{name}</div>
      <div style={{ fontSize: '0.9rem', color: '#b0b0b0' }}>
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
