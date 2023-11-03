"use client"; // This directive indicates that this code should run on the client side

import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import { useState } from 'react';
import { useUserAuth } from '../_utils/auth-context';
import React from 'react';


export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();


  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(item) {
    let name = item.name.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
    setSelectedItemName(name);
  }

  // Check if the user is not logged in and redirect to the landing page
  if (!user) {

    return (
      <div>
        <h1>You are not signed in. Please return to the landing page and sign in!</h1>
        <Link href="/week8">Go to Landing Page</Link>
      </div>
    
    ); 
  }
  else {
    return (
    <main className="bg-gray-900 text-white p-8 flex">
      {/* Left side: Shopping List */}
      <div className="w-1/2 pr-4">
        <h1 className="text-4xl mb-8 text-center">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
        <p className="text-center mt-4">
          <Link href="/" className="text-orange-400 hover:text-orange-600">
            Home
          </Link>
        </p>
        <button onClick={firebaseSignOut}>Logout</button>
      </div>

      {/* Right side: Meal Ideas */}
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
}

  