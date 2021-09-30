//BUCLE EJERCICIO 1
//declaracion de variables

let nombre;
let apellido;
let edad;

//asignacion de variables

nombre = "Alex";//string
apellido = "Camacho";//string
edad = 30;//numero

//mostrar los datos en la consola
alert("Hola, espere te encuentres bien!")
console.log("El nombre es:" + nombre);
console.log("El apellido es:" + apellido);
console.log("La edad es:" + edad);

//solicitar datos al usuario
nombre = prompt("Ingrese su nombre");
apellido = prompt("Ingrese su apellido");
edad = parseInt(prompt("Ingrese su edad"));//parseInt("45") -45

//mostrar los datos en la consola
console.log("El nombre es:" + nombre);
console.log("El apellido es:" + apellido);
console.log("La edad es:" + edad);

// //BUCLE EJERCIO 2
// const CIUDAD1 = "lima";
// const CIUDAD2 = "Piura";
// const CIUDAD3 = "Trujillo";
// const CIUDAD4 = "Chiclayo";
// const CIUDAD5 = "Puno";

// //las ciudades son Lima, Piura, Trujillo, Chiclayo, Puno
// alert("la ciudades son: \n"+CIUDAD1 + ", \n" + CIUDAD2 + ", " + CIUDAD3 + ", " + CIUDAD4 + ", " + CIUDAD5 + ".");
// // para bajar la letra a otro parrafo \n

//solicitar datos del usuario respecto a su ciudad
// CIUDAD1 = prompt("Ingrese el nombre de su ciudad");
// CIUDAD2 = prompt("Ingrese el nombre de su ciudad");

// //mostrar los datos
// console.log("El nombre de su ciudad es:" + CIUDAD1);




//BOOKLOT EJERCICIO3
//declaracion y asiganacicon todo en uno
let nom=prompt("ingrese el nombre de su hijo para el carnet de la universidad");
let ape=prompt("ingrese el apellido de su hijo para el carnet de la universidad");
let dir=prompt("ingrese su direccion");
let ciudad=prompt("ingrese su ciudad");
let pais=prompt("ingrese pais");
let carnet = "los datos del carnet de su hijo de la universidad son: \n" + nom + " \n" + ape + " \n" + dir + " \n" + ciudad + " \n" + pais + " "
console.log(carnet);


//EJERCICIO 4
//SOLICITAMOS EL PRECIO DE LA CARRERA Y LO PARSEAMOS A FLOAT
let precio = parseFloat(prompt("ingrese el precio de la carrrera a estudiar"));
console.log("usted tiene un descuento del 20%");
let descuento = precio * 0.2;
console.log("usted ahorra: "+ descuento);
let totalConDesc = precio - descuento;
console.log("valor con descuento: $" + totalConDesc);
alert("felicidades! obtiene un descuento ")