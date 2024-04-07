import React from 'https://dev.jspm.io/react@17.0.2';
import { FunctionComponent, JSX } from "https://esm.sh/preact@10.19.2";

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
    localizacion:string;
    titulo: string;
  };


const Button: FunctionComponent<ButtonProps> = (props) => {
    const { titulo,localizacion, ...rest } = props;
    return (
      <button class="botones" onClick={() => window.location.href = localizacion}>
        {titulo}
      </button>
    );
    };
  
    export default Button;    