
/* 
    Las propiedades son datos que describen a un objeto  "clave" : "valor"

    Metodos => Los metodos son propiedades con la diferencia que tienen una funcionalidad
    es decir que pueden realizar dicha accion mediante "funciones".

    this => se encarga de referenciar al objeto para lograr la interaccion de retornar fullName en este caso.

    Constructor => Este se encarga de generar objetos con sus propiedades y metodos

    New => La palabra new hace referencia a la creacion de un objeto nuevo "new Object"


*/





const user = {
    name : "Martin",
    lastname : "Galván",
    age : 25,
    fullName (){
        return this.name + " " + this.lastname;
    },
}

//Constructor
function Person(){
    this.name = "",
    this.lastname = "",
    this.age = 0,
    this.showFullName = function () {
        return `${this.name} ${this.lastname}`
    }
} 

//Creacion de un objeto Person gracias al "constructor"
const person2 = new Person()
person2.name = "Juan";
person2.lastname = "Cardozo";
person2.age = 50;
console.log(showFullName());




