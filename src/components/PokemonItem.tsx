import React from "react";
import { Pokemon } from "../types";
import MonsterBall from "../images/monster_ball.png";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

function PokemonItem({ name, url }: Pokemon) {
  return (
    <MainPokeBox>
      <Link to={`/detail/${name}`} state={{ pokeURL: url }}>
        <Pokename>{name}</Pokename>
        <BallImage
          src={MonsterBall}
          alt="ball"
          style={{ width: "25vh", marginLeft: 5 }}
        />
      </Link>
    </MainPokeBox>
  );
}

const MainPokeBox = styled.div`
  display: flex;
  width: 25vh;
  height: 30vh;
  margin-bottom: 30px;
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 12px;
  border: 1px solid lightgray;
  box-shadow: 4px 4px 4px 4px lightgray;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
  }
`;

const Pokename = styled.p`
  font-size: 2rem;
  margin-bottom: 5px;
  margin-top: 5px;
  &:hover {
    color: red;
    cursor: pointer;
    font-weight: 600;
  }
`;

const shake = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-8deg);
  }

  50% {
    transform: rotate(8deg);
  }
  
  75% {
    transform: rotate(-8deg);
  }

  100% {
    transform: rotate(0deg);
  }
  `;

const BallImage = styled.img`
  width: 25vh;
  margin-left: 5px;
  &:hover {
    animation: ${shake} 0.6s ease-out infinite;
  }
`;
export default PokemonItem;
