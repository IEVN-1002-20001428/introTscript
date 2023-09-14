export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Sony Erickson',
    precio: 875
}

const tablet: Producto = {
    desc: 'Samsung Tab9',
    precio: 950
}

function calcularIVA1(productos: Producto[]): number {
    let total = 0;
    productos.forEach((producto) => {
        total += producto.precio;
    });
    return total * 0.16;
}

export function calcularIVA2(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    });
    return [total, total * 0.16];
}

const articulos1 = [telefono, tablet];
const [total, iva] = calcularIVA2(articulos1);
console.log(`IVA $${iva}`);
console.log(`TOTAL $${total}`);
