"use client";
import {useState} from 'react';


export default function DogForm({mySubmit}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [timesSubmission, setTimesSubmission] = useState(0);



    function handleSubmit(event) {
        if (timesSubmission > 5) {
            alert("You have submitted too many times. Please refresh the page.");
            return;
        }

        setTimesSubmission(timesSubmission + 1);
        event.preventDefault();
        const newDog = {name, age};
        mySubmit(newDog);
        setName("");
        setAge(0);
    }
    
    return (
        <div>
            <h2>Dog Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="age">Age:</label>
                <input value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
                <button type="submit">Add Dog</button>
            </form>
        </div>
    );
}