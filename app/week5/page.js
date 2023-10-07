// Import necessary modules and components
import Link from 'next/link';
import ItemList from './item-list'; // Assuming this is the correct path to the ItemList component

// Define the Page component
export default function Page() {
  return (
    <main>
      {/* Page title */}
      <h1>Shopping List</h1>

      {/* Render the ItemList component */}
      <ItemList />

      {/* Create a link to the home page */}
      <Link href="/" className="text-orange-700">
        Home
      </Link>
    </main>
  );
}