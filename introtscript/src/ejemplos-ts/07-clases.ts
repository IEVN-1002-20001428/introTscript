class Persona2 {
    nombre: string;
    edad: number;

    constructor(a: string, b: number) { //Constructor no regresa nada
        this.nombre = a;
        this.edad = b;
    }

    imprimir() {
        console.table(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

let persona2: Persona2;
persona2 = new Persona2('Aldo', 21);
persona2.imprimir();



class Dado {
    private valor: number = 0;

    public tirar() {
        this.generar();
    }

    private generar() {
        this.valor = Math.floor(Math.random() * 6);
    }

    public imprimir() {
        console.log(`Salio el valor ${this.valor}`);
    }
}

let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();



class Persona3 {

    constructor(public nombre: string, public edad: number) { }

    imprimir() {
        console.table(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}
