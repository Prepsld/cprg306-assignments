import Link from 'next/link';
import ItemList from './item-list';

export default function Page () {
    return (
    <main>
        <h1>Shopping List</h1>
        <ItemList/>
        <Link href="/" className="text-orange-700">Home</Link>
    </main>
    );
}