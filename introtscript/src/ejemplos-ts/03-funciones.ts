function suma(): void { //Después de los : es el tipo de dato a retornar
    console.log(`La suma es ${3 + 5}`);
}

suma();

function suma2(a: number, b: number): number { //Después de los : es el tipo de dato a retornar
    return a + b;
}

const resultado = suma2(7, 10);
console.log(`La suma es ${resultado}`);

function multiplicar(n1: number, n2: number, base: number = 7): number {
    let temp = n1 * base;
    return temp;
}
console.log(multiplicar(3, 5, 2));

interface Mascotas {
    nombre: string,
    edad: number,
    mostrarEdad: () => void //Definir una función para la interfaz
}

function calcular(mascota: Mascotas, x: number): void {
    mascota.edad += x;
    console.log(mascota);
}

const nuevaMascota: Mascotas = {
    nombre: 'Miau',
    edad: 2,
    mostrarEdad() {
        console.log(`La edad es: `, this.edad);
    },
}
calcular(nuevaMascota, 3);
