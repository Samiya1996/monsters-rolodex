import React from "react";

import './card_list.style.css';

import { Card } from "../Card/card.component";

export const CardList = props => {
return <div className = 'card_list'>
    {props.monsters.map(monster =>(<Card  key = {monster.id} monster = {monster}/>))}
</div>

}