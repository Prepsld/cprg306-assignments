import Link from 'next/link';
import NewItem from './new-item';

export default function Page() {
  return (
    <main className="bg-gray-900 text-white p-8">
      {/* Page title */}
      <h1 className="text-4xl mb-8 text-center">New Item</h1>

      {/* Render the NewItem component */}
      <NewItem />

      {/* Link to the home page */}
      <p className="text-center mt-4">
        <Link href="/" className="text-orange-400 hover:text-orange-600">
          Home
        </Link>
      </p>
    </main>
  );
}