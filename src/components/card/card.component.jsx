import React from 'react';
import './card.component.css';

export const Card = ({ robot }) => (
  <div className='card'>
    <img
      src={`https://robohash.org/${robot.id}?size=180x180`}
      alt="robot"
    />
    <h2>{robot.name}</h2>
    <p>{robot.email}</p>
  </div>
);
