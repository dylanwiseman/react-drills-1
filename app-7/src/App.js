import React, { useState } from 'react';
import NewTask from './NewTask';
import List from './List';

export default function App() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState('');

    const handleChange = (e) => {
        setItem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, item]);
        setItem('');
    };

    return (
        <>
            <h1>My to-do list:</h1>
            <NewTask
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                item={item}
            />
            <List list={list} />
        </>
    );
}
