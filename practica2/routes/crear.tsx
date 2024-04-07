import axios from "npm:axios";
import Pokemones from "../components/Pokemon.tsx";
import { Handlers } from "https://deno.land/x/fresh@1.6.5/server.ts";
import Creador from "../islands/creador.tsx";
import React from 'https://dev.jspm.io/react@17.0.2';

let NOMBRE: string | undefined;
let IMAGEN: string | undefined;
let SONIDO: string | undefined;
let CREATOR: string | undefined;


export const handler: Handlers<{nombre: string,imagen: string, sonido: string, creator: string} > = {
  POST: async (request, context) => {
    const formData = await request.formData();

    const nombre: string = (await formData).get("nombre") ?? "";
    const imagen: string = (await formData).get("imagen") ?? "";
    const sonido: string = (await formData).get("sonido") ?? "";
    const creator: string = (await formData).get("creator") ?? "";

    NOMBRE = nombre;
    IMAGEN = imagen;
    SONIDO = sonido;
    CREATOR = creator;

    return context.render({ nombre, imagen, sonido, creator });
  },
};

export default async function Page() {

  if (NOMBRE !== undefined) {

    await axios.post('https://lospoquimones.deno.dev/', { name: NOMBRE, image: IMAGEN, sound: SONIDO, creator: CREATOR})
    .then(function (response) {
      console.log(response.data);
    })
    
  }

  return (
    <div>
      <h1 class="titulos">Creador de personajes</h1>
      <Creador />
        <div class="mostrar">
          <Pokemones name={NOMBRE || ""} image={IMAGEN || ""} sound={SONIDO || ""} />
        </div>
    </div>
  );
}
