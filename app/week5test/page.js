"use client";


export default function page() {
    let dogList = [
        {
            id: 1,
            name: "Hauser",
            description: "Happy!",
            imageURL: "https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            name: "Ted",
            description: "Stoned!",
            imageURL: "https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 3,
            name: "Bella",
            description: "Pretty!",
            imageURL: "https://images.pexels.com/photos/2951921/pexels-photo-2951921.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    let name = dogList[0].name; // Hauser

    dogList.sort((a, b) => a.name.localeCompare(b.name));

    // list all dogs except 2

    dogList = dogList.filter((dog) => dog.id !== 2);

    console.log("here");

    function handleClick(id) {
        alert(`Dog id: ${id}`);
    }


    return (<main>
        <ul>
            {dogList.map((dog) => (
            <li key={dog.id} onClick={() => handleClick(dog.id)}>
                <h2>{dog.name}</h2>
                <p>{dog.description}</p>
                <img src={dog.imageURL} />
            </li>
            ))}
        </ul>
    </main>)
}