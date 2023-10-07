import Link from 'next/link';
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="bg-gray-900 text-white p-8">
      {/* Page title */}
      <h1 className="text-4xl mb-8 text-center">Shopping List</h1>

      {/* Render the ItemList component */}
      <ItemList />

      {/* Link back to the home page */}
      <p className="text-center">
        <Link href="/" className="text-orange-400 hover:text-orange-600">
          Home
        </Link>
      </p>
    </main>
  );
}