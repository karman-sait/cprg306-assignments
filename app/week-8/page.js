"use client"; 
import React, { useState } from 'react';
import ItemList from './item-list';  
import NewItem from './new-item';  
import MealIdeas from './meal-ideas';  
import itemsData from './items.json';  

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, { ...newItem, id: Math.random().toString(36).substr(2, 9) }]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.replace(/,.*/, '').replace(/\p{Emoji}/gu, '').trim();
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main style={{
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#131313',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div style={{ flex: 1 }}>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
