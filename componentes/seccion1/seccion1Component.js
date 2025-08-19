import { item } from '../modulos/item/itemModulo.js';
import { productos } from '../../componentes/database/productos.js';

export function seccion1(){
    let seccion = document.createElement('section'); // 👈 corregido
    seccion.className = "seccion1";

    productos.forEach(element =>{
        seccion.appendChild(item(element.title, element.image));
    });

    return seccion;
}
