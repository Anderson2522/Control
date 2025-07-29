export function item() {

    let item = document.createElement('div');
    item.className = "item";


    let h1 = document.createElement('h1');
    h1.innerText= "Pikachu";
    h1.className = "item__title";



    let img = document.createElement('img');
    img.src = "/assets/pika.png";
    img.className = "item__img";


    let p = document.createElement('p');
    p.innerText = "Pikachu is an Electric-type Pokémon introduced in Generation 1.";
    p.className = "item__description";

     item.appendChild(h1);

    item.appendChild(img);

    item.appendChild(p);

   

    return item;


}