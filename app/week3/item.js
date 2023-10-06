export default function Item ({name, quantity, category}) {
    return (
    <div>
        <ol>
            <li className="text-red-300 bg-slate-800 border border-blue-800" >
                <p className="text-red-800">Name: {name}</p>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </li>
        </ol>
    </div>
    );
}