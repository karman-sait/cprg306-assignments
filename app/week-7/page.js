"use client"; // Add this directive at the top of the file to mark it for client-side rendering
import React, { useState } from 'react';
import ItemList from './item-list';  // Make sure this path is correct
import NewItem from './new-item';  // Make sure this path is correct
import itemsData from './items.json';  // Make sure this path is correct

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, { ...newItem, id: Math.random().toString(36).substr(2, 9) }]);
  };

  return (
    <main style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#131313',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
