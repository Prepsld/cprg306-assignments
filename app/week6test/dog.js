export default function Dog({name, age, onDelete}) {
    function handleDeleteDog() {
        onDelete(name);
    }
    return (
        <div>
            <h3>{name}</h3>
            <p>Age: {age} </p>
            <p>
                <button onClick={() => onDelete(name)}>Adopt</button>
            </p>
        </div>
    );
}