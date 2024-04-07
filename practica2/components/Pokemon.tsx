import React from 'https://dev.jspm.io/react@17.0.2';
import { FunctionComponent } from "https://esm.sh/preact@10.19.2";
import { Pokemon } from "../types.ts"

const Pokemones: FunctionComponent<Pokemon> = (props) => {
  const { name, image, sound } = props;
  return (
    <div className= "pokemons">
      <h1>{name}</h1>
      <img src={image} />
        <audio src={sound} controls>
        </audio>
    </div>
  );
};

export default Pokemones;