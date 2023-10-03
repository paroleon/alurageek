//Crear un GET
const listaProductos = () => {
    return fetch("http://localhost:3000/producto")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error))
};
//exportar lista producto

export const productoServices = {
    listaProductos,
}