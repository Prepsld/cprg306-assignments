export default function Item({ name, quantity, category }) {
  return (
    <div className="mb-4">
      {/* Item container with border and padding */}
      <div className="border border-blue-800 p-4 rounded-lg">
        {/* Display the item's name */}
        <p className="text-red-800">Name: {name}</p>

        {/* Display the item's quantity */}
        <p>Quantity: {quantity}</p>

        {/* Display the item's category */}
        <p>Category: {category}</p>
      </div>
    </div>
  );
}