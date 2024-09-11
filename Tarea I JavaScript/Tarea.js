// Variables con let
let num_1 = 10;
let num_2 = 20;
let suma = num_1 + num_2;
let resta = num_2 - num_1;
let multiplicacion = num_1 * num_2;
let division = num_2 / num_1;
let mensaje = "Hola";
let nombre = "Frankin";
let saludo = `${mensaje}, ${nombre}`;
let es_Mayor = num_1 > num_2; // Booleano que verifica si num1 es mayor que num2

// Variables con const
const PI = 3.1416;
const edad = 21;
const ciudad = "Medellin";
const pais = "Colombia";
const es_Adulto = edad >= 18; // Booleano que verifica si la persona es adulta

// Operaciones con variables
let area_Circulo = PI * (num_1 ** 2);
let nueva_Suma = suma + edad;
let saludo_Completo = saludo + `, bienvenido a ${ciudad}, ${pais}.`;

// Uso del operador ternario
let mensaje_Edad = es_Adulto ? "Eres un adulto." : "No eres un adulto.";
let comparacion = es_Mayor ? "El primer número es mayor." : "El segundo número es mayor o son iguales.";

// Impresión de resultados
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Área del círculo:", area_Circulo);
console.log(saludo_Completo);
console.log(mensaje_Edad);
console.log(comparacion);
