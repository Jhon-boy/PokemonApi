export class Usuarios {
    nombre = '';
    correo = '';
    contraseña = '';
    sexo = 'No definido';

    constructor(nombre, correo, contraseña, sexo) {
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
        this.sexo = sexo;
    }
}