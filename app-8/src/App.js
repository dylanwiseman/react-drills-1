import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
    const [character, setCharacter] = useState({});

    const getData = async () => {
        const { data } = await axios.get('https://swapi.dev/api/people/2');
        setCharacter(data);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <h1>Star Wars API</h1>
            <h2>Name: {character?.name}</h2>
            <h2>Birth Year: {character?.birth_year}</h2>
            <h2>Height: {character?.height}</h2>
            <h2>Eye Color: {character?.eye_color}</h2>
        </div>
    );
}
