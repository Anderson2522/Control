export function naveagor(){

   let nav = document.createElement("div");
   nav.className="nav";


    let inicio=document.createElement("div");
    let imagen1=document.createElement("img");
    imagen1.src="https://static.vecteezy.com/system/resources/previews/025/902/055/non_2x/house-cartoon-style-illustration-ai-generated-vector.jpg";
    inicio.appendChild(imagen1);


 
    let paquetes=document.createElement("div");
    let imagen2=document.createElement("img");
    imagen2.src="https://i.pinimg.com/736x/8d/5a/9a/8d5a9adfaf7656227992c07cbb035061.jpg";
    paquetes.appendChild(imagen2);


    let preguntas = document.createElement("div");
    let imagen3 = document.createElement("img");
    imagen3.src ="https://png.pngtree.com/recommend-works/png-clipart/20241224/ourmid/pngtree-red-question-mark-symbol-png-image_14540396.png";
    preguntas.appendChild(imagen3);

    let carrito=document.createElement("div");
    let imagen4=document.createElement("img");
    imagen4.src="https://media.istockphoto.com/id/1206806317/es/vector/icono-del-carrito-de-compras-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=sdScWRH_AeHdG6vHzMn8xUHCpe7iM6O1Skgi2lPuKG0=";
    carrito.appendChild(imagen4);


  nav.appendChild(inicio);
  nav.appendChild(paquetes);
  nav.appendChild(preguntas);
  nav.appendChild(carrito);
  

return nav;

}