"use client"; // Assuming this is specific to your project setup

// Import necessary modules and components
import { useState } from "react";
import Link from 'next/link';
import Item from './item'; // Import the Item component
import items from './items.json'; // Import the JSON data containing items

// Define the ItemList component
function ItemList() {
  // Create a state variable 'sortBy' and its setter function 'setSortBy' using useState
  const [sortBy, setSortBy] = useState('name');

  // Sort the items array based on the 'sortBy' state variable
  const sortedItems = [...items].sort((a, b) => {
    // If 'sortBy' is 'name', sort items by their 'name' property
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    // If 'sortBy' is 'category', sort items by their 'category' property
    else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    // Return 0 if no sorting preference is specified
    return 0;
  });

  // Render the component
  return (
    <div>
      <div>
        {/* Button to set 'sortBy' to 'name' */}
        <button
          onClick={() => setSortBy('name')}
          style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
        >
          Sort by Name
        </button>
        {/* Button to set 'sortBy' to 'category' */}
        <button
          onClick={() => setSortBy('category')}
          style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
        >
          Sort by Category
        </button>
      </div>
      <div>
        {/* Map through sortedItems array and render Item component for each item */}
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

// Export the ItemList component as the default export
export default ItemList;