import { Producto, calcularIVA2 } from "./05-desestructurar-funciones";

const carrito: Producto[] = [
    {
        desc: 'Teléfono',
        precio: 8738
    },
    {
        desc: 'Tablet',
        precio: 7459
    },
    {
        desc: 'Gafas VR',
        precio: 9039
    }
];

const [total3, iva3] = calcularIVA2(carrito);
console.log(`TOTAL $${total3}`);
console.log(`IVA $${iva3}`);
