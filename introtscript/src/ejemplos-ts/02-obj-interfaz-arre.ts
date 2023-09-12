//INTERFAZ.Clase que se genera modelos para construir objetos. Comienzan con mayúscula
interface Alumno {
    matricula?: number; //? indica que la propiedad es opcional
    nombre: string;
    email: string;
}

const alumno: Alumno = {
    nombre: 'Aldo',
    email: 'aldo@gmail.com'
}

console.table(alumno.nombre);

let mascotas: string[] = ['perro', 'gato', 'perico'];

mascotas[1] = 'perico verde';
mascotas.push('gato dos');
console.table(mascotas);

let temp: (string | number)[] = [];
temp.push('RCR');
temp.push(45);
