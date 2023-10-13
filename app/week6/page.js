"use client";
// Import necessary modules and components
import Link from 'next/link';
import ItemList from './item-list'; 
import NewItem from './new-item';
import itemsData from './items.json';
import { useState } from 'react';


// Define the Page component for Week 6
export default function Page() {

  const [items, setItems] = useState(itemsData);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  return (
    <main className="bg-gray-900 text-white p-8">
      {/* Page title */}
      <h1 className="text-4xl mb-8 text-center">Shopping List</h1>

      {/* Render the ItemList component */}
      <ItemList items={items} />

      {/* Render the NewItem component */}
      <NewItem onAddItem={handleAddItem} />

      {/* Create a link to the home page */}
      <p className="text-center mt-4">
        <Link href="/" className="text-orange-400 hover:text-orange-600">
          Home
        </Link>
      </p>
    </main>
  );
}