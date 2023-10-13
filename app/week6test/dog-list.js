import Dog from "./dog";


export default function DogList({dogsProp, onDelete}) {
    

    return (
        <div>
            <h2>Dog List</h2>
            {dogsProp.map((dog) => (
                <Dog key={dog.name} name={dog.name} age={dog.age} onDelete={onDelete} />
            ))}
        </div>
    );
}