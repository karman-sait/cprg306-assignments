import React from 'react';

function Item({ name, quantity, category }) {
  return (
    <li className="list-none p-2">
      {name}, Quantity: {quantity}, Category: {category}
    </li>
  );
}

export default Item;
