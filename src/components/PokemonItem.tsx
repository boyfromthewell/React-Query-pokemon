import React from "react";
import { Pokemon } from "../types";
import MonsterBall from "../images/monster_ball.png";
function PokemonItem({ name, url }: Pokemon) {
  return (
    <div
      style={{
        maxWidth: 400,
        width: "30vh",
        height: "30vh",
        border: "1px solid lightgray",
        marginBottom: "30px",
        marginRight: "20px",
        marginLeft: "20px",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p>{name}</p>
        <img
          src={MonsterBall}
          alt="ball"
          style={{ width: "25vh", marginLeft: 5 }}
        />
      </div>
    </div>
  );
}

export default PokemonItem;
