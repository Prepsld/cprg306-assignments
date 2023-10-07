import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Page() {
  return (
    <main className="bg-gray-900 text-white p-8">
      {/* Page title */}
      <h1 className="text-4xl mb-8 text-center">CPRG 306: Web Development 2 - Assignments</h1>

      {/* First paragraph */}
      <p className="text-center">
        This is a paragraph, written by David Prepsl and following the teacher's demonstration
      </p>

      {/* Second paragraph */}
      <p className="text-center">
        This is a second paragraph to demonstrate GitHub's checkpoints.
      </p>

      {/* Render the StudentInfo component */}
      <StudentInfo />

      {/* Navigation links */}
      <div className="flex justify-center">
        <Link href="/week2" className="text-blue-400 mx-2 hover:text-blue-600">
          Week 2
        </Link>
        <Link href="/week3" className="text-blue-400 mx-2 hover:text-blue-600">
          Week 3
        </Link>
        <Link href="/week4" className="text-blue-400 mx-2 hover:text-blue-600">
          Week 4
        </Link>
        <Link href="/week5" className="text-blue-400 mx-2 hover:text-blue-600">
          Week 5
        </Link>
      </div>
    </main>
  );
}