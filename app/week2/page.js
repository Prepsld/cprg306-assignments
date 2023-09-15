import Link from 'next/link';
import EventList from './event-list';
export default function week2() {
    return (
        <main>
            <h1>Community Events</h1>

            <p>
                <Link href="/">Home</Link>
            </p>
            <EventList />
        </main>
    );
}