// Linked List
// 1 => 2 => 3 => 4 => 5 => NULL

// Codigo del siguiente ejemplo -->    1 => 2 => 3 => 4 => NULL

//Esta estructura contiene los valores definidos para poder crear
//nuestra propia linked list necesitamos utilizar clases y un constructor.
let singleList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

// Estructura para crear mis linked List...
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class MySingleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  // Metodos en mi LinkedList =====> ...

  //Metodo append => agregar elementos al final de nuestra lista "tail or cola".
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  //Metodo prepend => agregar elementos al principio de nuestra lista "head o cabeza".
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}
// Instanciado de nuestra clase
let myLinkedList = new MySingleLinkedList(5);
console.log(myLinkedList); // MySingleLinkedList {head: { value: 5, next: null },tail: { value: 5, next: null },length: 1}
