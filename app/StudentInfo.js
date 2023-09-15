import Link from 'next/link';
export default function StudentInfo() {
    return (
        <ul>
            <li>
                <p>Name: David Prepsl</p>
            </li>
            <li>
                <p>Course Section: CPRG 306a</p>
            </li>
            <li>
                <Link href="https://github.com/Prepsld/cprg306-assignments">Github Link</Link>
            </li>
        </ul>
    );

}