//Iteration 6: Función swap
//Crea una función llamada swap()
//que reciba un array y dos parámetros que sean indices del array.
//La función deberá intercambiar la posición de los valores de los índices que hayamos enviado cómo parámetro.
//Retorna el array resultante

const jugadoresMal = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const reversed = jugadoresMal.reverse();

console.log("Se cambian las posiciones en el array:", reversed);

//Opción 2 usando una función que haga el swap mediante la asignación de variables

// function swap(array, param1, param2) {
    
//     let item1 = array[param1];
//     let item2 = array[param2];

//     array[param1] = item2;
//     array[param2] = item1;
    
//     return array;

// }

//console.log("Este es el array resultante tras el cambio", swap(jugadoresMal, 0, 3));