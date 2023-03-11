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
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
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
  //Metodo get => para obtener el valor mediante "key"
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = data[address];
    if (currentBucket) {
      for (let i = 0; i < i.currentBucket; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

// Instanciamos un nuevo array con la clase "hashtable"
const myHashTable = new HashTable(50);
console.log(myHashTable); //HashTable { data: [ <50 empty items> ] }

// Agregamos 2 elementos a nuestro HashTable para visualizar la "COLISION" =>
myHashTable.set("martin", 2001);
console.log(myHashTable); // [vacío × 43, Array(1), vacío × 6] => en la posicion 44 estara mi array

myHashTable.set("juan", 2001);
console.log(myHashTable); // [vacío × 41, Array(2), vacío, Array(1), vacío × 6] => Colicion en la posicion 42
