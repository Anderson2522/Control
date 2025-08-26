import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion1/seccion1Component.js";
import { naveagor } from "./componentes/navegador/navComponent.js"

function seccion() {
    
   let seccion = document.createElement('section');

   seccion.appendChild(header());
   seccion.appendChild(seccion1());
    seccion.appendChild(naveagor());
  
   return seccion;
   

}

document.body.appendChild(seccion());