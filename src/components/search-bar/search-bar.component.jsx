import React from 'react';

export const SearchBar = ({handleChange, placeholder}) => (
    <input onChange={handleChange} placeholder={placeholder}></input>
)