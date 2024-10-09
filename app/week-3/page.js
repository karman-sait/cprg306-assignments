import React from 'react';
import ItemList from './item-list';

function Page() {
  return (
    <main className="container mx-auto mt-4">
      <h1 className="text-center text-2xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;
