
import React from 'https://dev.jspm.io/react@17.0.2';
import axios from "npm:axios";
import Pokemones from "../components/Pokemon.tsx";
import { Pokemon } from "../types.ts"

export default async function Page() {
  const response = await axios.get("https://lospoquimones.deno.dev/",);
  const Personajes: Pokemon[] = response.data;
  
  return (
    <div>
    <h1 class="titulos">Todos los personajes</h1>
      <div class="mostrar">
        {Personajes.map((char) => (
          <Pokemones name={char.name} image={char.image} sound={char.sound} />
        ))}
      </div>
    </div>  
  );
}