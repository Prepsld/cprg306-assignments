import Link from 'next/link';
import NewItem from './new-item';

export default function Page() 
{
    return (
        <main>
            <NewItem/>
            <Link href="/" className="text-orange-700">Home</Link>
        </main>
    );
}