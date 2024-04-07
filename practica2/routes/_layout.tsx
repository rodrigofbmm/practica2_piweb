import { PageProps } from "https://deno.land/x/fresh@1.6.5/server.ts";
import Bottonreccarga from "../islands/personajes.tsx";
import React from 'https://dev.jspm.io/react@17.0.2';
import Button from "../islands/boton.tsx";

const Layout = (props: PageProps) => {
  const Component = props.Component;
  return (
    <div class="contenedorB">
        <Bottonreccarga/>
        <Button localizacion="/buscador" titulo="buscador"/>
        <Button localizacion="/crear" titulo="crear personaje"/>
      <Component />
    </div>
  );
};
export default Layout; 