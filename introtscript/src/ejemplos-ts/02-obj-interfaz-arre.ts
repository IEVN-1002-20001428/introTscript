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

console.log(alumno.nombre);
