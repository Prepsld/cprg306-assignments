"use client";

import DogList from "./dog-list";
import DogForm from "./dog-form";
import {useState} from "react";

const dogData = [
    {name: "Fido", age: 2},
    {name: "Spot", age: 5},
    {name: "Rover", age: 3},
    {name: "Rex", age: 4},
    {name: "Ralph", age: 7},
];


export default function Week6Test() {
    const [dogs, setDogs] = useState(dogData);
    function handleSubmit(dog) {
        setDogs([...dogs, dog]);
    }
    function handleDelete(name) {
        setDogs(dogs.filter((d) => d.name !== name));
        
    }

    return (
        <div>
            <h1>Week 6 Test</h1>
            <DogForm mySubmit={handleSubmit}/>
            <DogList dogsProp={dogs}  onDelete={handleDelete} />
        </div>
    );
}