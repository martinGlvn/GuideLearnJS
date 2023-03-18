/*
Realizar Helado
Cada vez que recibamos una orden la mandamos a produccion
*/

let stocks = {
  Fruits: ["strawbeery", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocholates", "peanuts"],
};

console.log(stocks.Fruits[2]);

let order = (Fruit_name, call_production) => {
  call_production();
};

let production = () => {};

order("", production);
