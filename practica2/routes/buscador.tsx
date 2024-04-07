import axios from "npm:axios";
import Pokemones from "../components/Pokemon.tsx";
import React from 'https://dev.jspm.io/react@17.0.2';
import Buscar from "../islands/buscar.tsx";

let name: string | undefined;
let pokemon: any;


export const handler: Handlers<{ name: string }> = {
  POST: async (request, context) => {
    const formData = await request.formData();
    const nombre: string = (await formData).get("nombre");
    name = nombre;

    return context.render({ nombre });
  },
};

export default async function Page() {
    const response = await axios.get(`https://lospoquimones.deno.dev/${name}`);
    pokemon = response.data[0];

  return (
    <div>
        <h1 class="titulos">Buscador de personajes</h1>
        <Buscar/>
        <div class="mostrar">
        <Pokemones name={pokemon?.name} image={pokemon?.image} sound={pokemon?.sound}/>
        </div>
    </div>
  );
}