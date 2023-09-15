import Link from 'next/link';
import EventList from './event-list';
import StudentInfo from '../StudentInfo';
export default function week2() {
    return (
        <main>
            <h1>Shopping List</h1>

            <p>
                <Link href="/">Home</Link>
            </p>
            <EventList />
            <StudentInfo />
        </main>
    );
}