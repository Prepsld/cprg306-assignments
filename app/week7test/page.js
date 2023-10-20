"use client";
import { useState, useEffect } from "react";

async function fetchRandomDog() {
    //https://dog.ceo/api/breeds/image/random
    //fetch a random dog image
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data.message;
}

async function fetchDogBreeds() {
    try {
        const response = await fetch(" https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error(error);
    }
}


export default function Page() {

    const [dog, setDog] = useState("");
    const [breeds, setBreeds] = useState([]);

    async function loadRandomDog() {
        const randomDog = await fetchRandomDog();
        console.log(randomDog);
        setDog(randomDog);
    }
    async function loadDogBreeds() {
        const dogBreeds = await fetchDogBreeds();
        console.log(dogBreeds);
        setBreeds(dogBreeds);
    }

useEffect(() => {
    loadRandomDog();
    loadDogBreeds();
}, []);

    return (
        <main>
            <h1>Dogs!</h1>
            <div><select name="breeds">{Object.keys(breeds).map((breed) => (<option key={breed}>{breed}</option>))}
            </select></div>
            <div><img src={dog}></img></div>
        </main>
    )
}