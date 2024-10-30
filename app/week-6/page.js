import React from 'react';
import ItemList from './item-list';

export default function Page() {
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
      <ItemList />
    </main>
  );
}
