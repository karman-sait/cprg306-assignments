import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  const cleanName = () => {
    const cleaned = name.replace(/,.*/, '').replace(/\p{Emoji}/gu, '').trim();
    onSelect(cleaned);
  };

  return (
    <li onClick={cleanName} style={{
      backgroundColor: '#2c3e50', // Neutral darker color as base
      padding: '10px',
      borderRadius: '8px',
      marginBottom: '10px',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d35400'} // Orange on hover
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2c3e50'} // Return to neutral on mouse out
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}>{name}</div>
      <div style={{ fontSize: '0.9rem', color: '#b0b0b0' }}>
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
