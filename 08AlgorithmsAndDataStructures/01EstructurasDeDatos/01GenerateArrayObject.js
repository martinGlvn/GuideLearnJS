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
  //mi metodo pop => Elimino el ultimo elemento de mi array
  pop() {
    const ultimoItem = this.data[this.length - 1]; // Almacenamos el ultimo elemento
    delete this.data[this.length - 1]; // Eliminamos el ultimo elemento del array
    this.length--; // Disminuimos la longitud
    return ultimoItem;
  }
  //mi metodo delete =>
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  // Logica que utiliza nuestro metodo delete para reducir la posicion del elemento
  // siguiente al eliminado
  shiftIndex(index) {
    for (let index = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

// Instanciando nuestra clase
const myArray = new MyArray();
console.log(myArray); // MyArray { length: 0, data: {} }

// Nuesto array posee lo siguientes metodos que podremos utilizar => delete, pop, push, get
myArray.push;
myArray.delete;
myArray.get;
myArray.pop;
