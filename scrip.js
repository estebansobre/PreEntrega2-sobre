
let operacion;
let num1, num2;
let resultados = []; 


function obtenerEntradas() {
    operacion = prompt("¿Qué operación deseas hacer? (suma, resta, multiplicación, división)");
    num1 = parseFloat(prompt("Dame el primer número:"));
    num2 = parseFloat(prompt("Ahora, dame el segundo número:"));
}

const operaciones = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => (b !== 0 ? a / b : 'Error: División por cero')
};

function procesarOperacion() {
    let resultado;
 
    if (operaciones[operacion.toLowerCase()]) {
        resultado = operaciones[operacion.toLowerCase()](num1, num2);
        resultados.push({ operacion, num1, num2, resultado }); 
        alert(`El resultado de la ${operacion} es: ${resultado}`);
    } else {
        alert('Esa operación no es válida. Por favor, intenta de nuevo.');
    }
}
function mostrarResultados() {
    console.log("Resultados anteriores:", resultados);
}
obtenerEntradas();
procesarOperacion();
mostrarResultados(); 
