import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Page() 
{
  return ( <main> 
    <h1 className="text-4xl m-8"> CPRG 306: Web Development 2 - Assignments</h1>
   <p>This is a paragraph, written by David Prepsl and following the teachers demonstration</p> 
   <p>This is a second paragraph to demonstrate githubs checkpoints.</p>
   <StudentInfo/>
   <Link href="/week2">Week 2</Link>
   <Link href="/week3">Week 3</Link>
   <Link href="/week4">Week 4</Link>
   <Link href="/week5">Week 5</Link>
   </main> );
}