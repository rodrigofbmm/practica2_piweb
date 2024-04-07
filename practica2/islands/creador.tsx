import { useState } from "https://esm.sh/preact@10.19.2/hooks";
import React from 'https://dev.jspm.io/react@17.0.2';


export default function Creador() {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [sonido, setSonido] = useState("");
  const [creator, setCreator] = useState("");

  return (
    <div class="formulario">
      <form  action="/crear" method="POST">
        <input type="text" placeholder="pokemon" name="nombre" value={nombre} onChange={(e) => setNombre(e.currentTarget.value)}/>
        <input type="text" placeholder="imagen" name="imagen" value={imagen}  onChange={(e) => setImagen(e.currentTarget.value)}/>
        <input type="text" placeholder="sonido" name="sonido" value={sonido} onChange={(e) => setSonido(e.currentTarget.value)} />
        <input type="text" placeholder="creator" name="creator" value={creator} onChange={(e) => setCreator(e.currentTarget.value)}/>
        <button class="botones" type="submit">Crear</button>
      </form>
    </div>
  );
};

