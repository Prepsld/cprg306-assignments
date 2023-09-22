export default function Item ({name, quantity, category}) {
    return (
    <div>
        <ol>
            <li className="border border-red-800 bg-yellow-300 w-full max-w-xs m-4 p-2" >
                <p className="text-red-800">Name: {name}</p>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </li>
        </ol>
    </div>
    );
}