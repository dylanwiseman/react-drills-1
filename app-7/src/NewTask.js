import React from 'react';

export default function NewTask({ handleSubmit, handleChange, item }) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={item} />
            <input type="submit" value="Add" />
        </form>
    );
}
