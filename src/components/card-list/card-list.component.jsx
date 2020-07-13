import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => (
  <div className="card-list">
    {
      //render javascript
      //map() returns iterated, takes a ftn at parms and calls on each obj
    }

    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
