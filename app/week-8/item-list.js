import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortItems = (items, sortBy) => {
    return items.slice().sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  };

  const sortedItems = sortItems(items, sortBy);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setSortBy('name')} style={{
          backgroundColor: sortBy === 'name' ? '#e67e22' : '#d35400', 
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          outline: 'none'
        }}>Sort by Name</button>
        <button onClick={() => setSortBy('category')} style={{
          backgroundColor: sortBy === 'category' ? '#e67e22' : '#d35400', 
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          outline: 'none'
        }}>Sort by Category</button>
      </div>
      <ul style={{ listStyle: 'none', padding: '0', maxWidth: '600px' }}>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
