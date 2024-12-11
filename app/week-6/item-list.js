"use client";
import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortItems = (items, sortBy) => {
    if (sortBy === 'name') {
      return items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
      return items.sort((a, b) => a.category.localeCompare(b.category));
    }
    return items;
  };

  const sortedItems = sortItems([...items], sortBy);

  const handleSortByName = () => setSortBy('name');
  const handleSortByCategory = () => setSortBy('category');

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span style={{ fontSize: '1rem', marginRight: '10px' }}>Sort by:</span>
        <button
          onClick={handleSortByName}
          style={{
            backgroundColor: sortBy === 'name' ? '#d35400' : '#e67e22',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            outline: 'none',
            transition: 'background-color 0.2s'
          }}
        >
          Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{
            backgroundColor: sortBy === 'category' ? '#d35400' : '#e67e22',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            outline: 'none',
            transition: 'background-color 0.2s'
          }}
        >
          Category
        </button>
      </div>
      <ul style={{ 
          listStyle: 'none', 
          padding: '0', 
          maxWidth: '400px' 
        }}>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
