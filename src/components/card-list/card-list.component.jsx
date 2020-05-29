import React from 'react';
import {Card} from '../card/card.component';
import './card-list.component.css';

export const CardList = ({robots}) => (
    <div className='card-list'>
        {robots.map(robot => <Card key={robot.id} robot={robot} />)}
    </div>
)