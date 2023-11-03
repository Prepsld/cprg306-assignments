"use client";
// Import the necessary modules and functions
import React from 'react';
import { useUserAuth } from './_utils/auth-context';

// Define your landing page component
function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Check if the user is logged in and display content accordingly
  if (!user) {
    // User is not logged in, display a login button
    return (
      <div>
        <h1>Welcome to the shopping list!</h1>
        <button onClick={gitHubSignIn}>Login with GitHub</button>
        <p></p>
      </div>
    );
  } else {
    // User is logged in, display a welcome message, logout button, and link to the shopping list page
    return (
      <div>
        <h1>Welcome, {user.displayName} ({user.email})</h1>
        <button onClick={firebaseSignOut}>Logout</button>
        <a href="week8/shopping-list">Go to Shopping List</a> {/* Update the href as needed */}
      </div>
    );
  }
}

export default LandingPage;