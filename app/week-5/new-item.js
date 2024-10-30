"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-black p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1F2937] rounded-lg shadow-md p-6 w-full max-w-md flex flex-col gap-4 mt-10"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="text-sm p-3 w-full border border-gray-300 rounded-lg focus:outline-none placeholder-gray-400 text-black"
          placeholder="Item name"
          aria-label="Item name"
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="bg-gray-600 text-white rounded p-2 disabled:bg-gray-500"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="text-sm p-2 w-8 text-center text-white border border-gray-300 rounded">
              {quantity}
            </span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="bg-blue-500 text-white rounded p-2"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-sm p-2 border border-gray-300 rounded-lg focus:outline-none text-gray-700"
            aria-label="Select category"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full rounded p-3 hover:bg-blue-600"
          aria-label="Add item"
        >
          +
        </button>
      </form>
    </div>
  );
}
