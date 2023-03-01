// FUNCION CONSTRUCTORA
function Lista() {
  this.head = null;
}

// FUNCION CONSTRUCTORA
function Nodo(value) {
  this.value = value;
  this.next = null;
}

//
Lista.prototype.add = function (value) {
  if (this.head === null) this.head = new Nodo(value);
  else {
    let refe = this.head;
    while (refe.next !== null) {
      refe = refe.next;
    }
    refe.next = new Nodo(value);
  }
};

//
let list = new Lista();
// Almacemientos
list.add("Martin");
list.add("Lucas");
list.add("Ezequiel");
list.add("Juan");
console.log(list);
