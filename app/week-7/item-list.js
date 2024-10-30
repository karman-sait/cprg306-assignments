import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  
  const sortItems = (items, sortBy) => {
    const sortedItems = [...items];
    if (sortBy === 'name') {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }
    return sortedItems;
  };

  
  const sortedItems = sortItems(items, sortBy);

 
  const handleSortByName = () => setSortBy('name');
  const handleSortByCategory = () => setSortBy('category');

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span style={{ fontSize: '1rem', marginRight: '10px', color: '#fff' }}>Sort by:</span>
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
      <ul style={{ listStyle: 'none', padding: '0', maxWidth: '600px' }}>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
