import Link from 'next/link';
import EventList from './event-list';
import StudentInfo from '../StudentInfo';

export default function Week2() {
  return (
    <main className="bg-gray-900 text-white p-8">
      {/* Page title */}
      <h1 className="text-4xl mb-8 text-center">Shopping List</h1>

      {/* Link back to the home page */}
      <p className="text-center">
        <Link href="/" className="text-blue-400 hover:text-blue-600">
          Home
        </Link>
      </p>

      {/* Render the EventList component */}
      <EventList />

      {/* Render the StudentInfo component */}
      <StudentInfo />
    </main>
  );
}