// Array convencional
const defaultArray = ["martin", 25];
console.log(defaultArray); // [ 'martin', 25 ]

// Utilizamos el metodo push para agregar un elemento al final de nuestro array.
defaultArray.push("ana");
console.log(defaultArray); // [ 'martin', 25, 'ana' ]

// Los arrays por defecto en js poseen metodos ya que sabemos que en js todo es un
// objeto los mismos pueden contener funcionalidades como .push .shift etc, estos
// los posee por default js, ¿que pasaria si quisieramos crear nuestro propio array?

// Array generado a partir de un Objeto - Example =>

class MyArray {
  // Constructor que permite crear y utilizar mi array
  constructor() {
    this.length = 0; //Elementos que contiene mi array
    this.data = {}; //Elementos que posee mi array
  }

  /*METODOS QUE TENDRA MI ARRAY => => => => */

  //mi metodo get => obtiene elementos
  get(index) {
    this.data[index];
  }
  //mi metodo push => recibe un parametro "item" y lo agrega a mi array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
}

// Instanciando nuestra clase
const myArray = new MyArray();
console.log(myArray); // MyArray { length: 0, data: {} }
