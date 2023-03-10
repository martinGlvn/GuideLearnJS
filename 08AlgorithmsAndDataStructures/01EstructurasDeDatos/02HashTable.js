//
class HashTable {
  //Constructor que nos pemite crear nuestro HashTable =>
  constructor(size) {
    this.data = new Array(size);
  }
  //La funcion "hashMethod" se encarga de crear un hash aleatorio para nuestro hashtable.
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt[i] * i) % this.data.length;
    }
    return hash;
  }
  //Metodo set => para agregar elementos a nuestra "HashTable"
  set(key, value) {
    const address = this.hashMethod(key);
    // si la direccion no existe guardaremos la informacion en un array.
    if (!this.data[address]) {
      this.data[address] = [];
    }
    // si la direccion ya existe crea otra estructura en el mismo espacio
    // para trabajar con coliciones.
    this.data[address].push([key, value]);
    return this.data;
  }
}
// Instanciamos un nuevo array con la clase "hashtable"
const myHashTable = new HashTable(50);
console.log(myHashTable); //HashTable { data: [ <50 empty items> ] }
