// Callback Simple =>

function uno(call_function_dos) {
  console.log("funcion 1");
  call_function_dos();
}

function dos() {
  console.log("funcion 2 mediante callback");
}

uno(dos);
