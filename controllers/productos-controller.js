import { productoServices } from "../servicios/productos-servicios.js"

const nuevoProducto = (name,imageURL,price,id) => {
    const card = document.createElement("div")
    
    const contenido = `
        <div class="producto">
            <img class="producto-imagen" src="${imageURL}" alt="img">
            <h1 class="producto-name">${name}</h1>
            <p class="producto-precio">${price}</p>
            <a class="producto-id" href="../producto.html?id=${id}">Ver producto</a>
        </div>`

    card.innerHTML = contenido
    //card.dataset.id = id

    return card
}

const productos = document.querySelector("[data-product]")

const render = async () => {
    try {
        const listaProducto = await productoServices.listaProductos()
        listaProducto.forEach(elemento => {
            productos.appendChild(
                nuevoProducto( elemento.name, elemento.imageURL, elemento.price,   elemento.id)
                )
        })
    } catch (error) {
        console.log(error)
    }
}

render()



