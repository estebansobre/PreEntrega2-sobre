// Variables para guardar los datos
let operacion;
let num1, num2;
let resultados = []; // Array para guardar resultados

// Función para pedirle al usuario los datos
function obtenerEntradas() {
    operacion = prompt("¿Qué operación deseas hacer? (suma, resta, multiplicación, división)");
    num1 = parseFloat(prompt("Dame el primer número:"));
    num2 = parseFloat(prompt("Ahora, dame el segundo número:"));
}

// Objeto con las funciones de las operaciones
const operaciones = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => (b !== 0 ? a / b : 'Error: División por cero')
};

// Función para realizar la operación y mostrar el resultado
function procesarOperacion() {
    let resultado;

    // Verificamos si la operación es válida
    if (operaciones[operacion.toLowerCase()]) {
        resultado = operaciones[operacion.toLowerCase()](num1, num2);
        resultados.push({ operacion, num1, num2, resultado }); // Guardamos el resultado
        alert(`El resultado de la ${operacion} es: ${resultado}`);
    } else {
        alert('Esa operación no es válida. Por favor, intenta de nuevo.');
    }
}

// Función para mostrar todos los resultados guardados
function mostrarResultados() {
    console.log("Resultados anteriores:", resultados);
}

// Ejecutamos las funciones
obtenerEntradas();
procesarOperacion();
mostrarResultados(); // Mostramos los resultados en la consola
