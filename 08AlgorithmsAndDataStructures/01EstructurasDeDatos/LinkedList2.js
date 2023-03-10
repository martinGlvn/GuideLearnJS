class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Creamos 4 variables con las cuales instanciomos nuestro objeto constructor Node con valores.
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C-> D -> NULL

const printLinkedList = (head) => {
  if (head === null) return;
  console.log(head.val);
  printLinkedList(head.next);
};

printLinkedList(a);
