// Metodos => Funcionalidades dentro de nuestros objetos

const auto = {
  modelo: "audi A5",
  año: 2001,
  velocidad(km) {
    return `El modelo es "${this.modelo}" su velocidad es de ${km}`;
  },
  modelo2() {
    return `${this.modelo}`;
  },
  //Las Arrow Functions no deben ser utilizadas como metodos ya q no podremos utilizar metodos "super & this"
};

console.log(auto.velocidad(500));
console.log(auto.modelo2());

// Recorrer un Objeto con "for in" para obtener sus datos
for (const caractersAuto in auto) {
  console.log(auto[caractersAuto]); //audi A5 2001
}

// Otra forma de obtener los valores de un objeto es utilizando Object values =>
Object.values(auto).forEach((element) => {
  console.log(element);
});

console.log(Object.values(auto)); // [ 'audi A5', 2001, [Function: velocidad], [Function: modelo2] ]
