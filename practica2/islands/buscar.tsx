import { useState } from "https://esm.sh/preact@10.19.2/hooks";
import React from 'https://dev.jspm.io/react@17.0.2';

export default function Buscar() {
  const [nombre, setNombre] = useState("");


  return (

      <div class="formulario">
        <form  action="/buscador" method="POST">
          <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.currentTarget.value)}/>
          <button class="botones">Buscar</button>
        </form>
      </div>
   

  );
}

