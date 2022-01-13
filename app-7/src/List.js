import React from 'react';
import Todo from './Todo';

export default function List({ list }) {
    return (
        <ul>
            {list.map((item, index) => (
                <Todo item={item} key={index} />
            ))}
        </ul>
    );
}
