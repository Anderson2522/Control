export function item(titulo, urlImg, precio) {
    let item = document.createElement("div");
    item.className = "item";

    // título
    let h3 = document.createElement("h3");
    h3.textContent = titulo;

    // imagen
    let img = document.createElement("img");
    img.src = urlImg;
    img.alt = titulo;

    // precio
    let p = document.createElement("p");
    p.textContent = `$${precio}`;

    // agregar todo al item
    item.appendChild(h3);
    item.appendChild(img);
    item.appendChild(p);

    // evento click
    item.addEventListener("click", ()=>{
        item.classList.add("verde");
        let rHeader = document.querySelector(".header");
        rHeader.classList.add("ocultar");
    });

    return item;
}
