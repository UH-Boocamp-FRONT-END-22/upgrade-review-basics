//Iteration 5: Función rollDice()
//Crea una función llamada rollDice() que reciba como parémtro el número de caras que queramos que tenga el dado
//que deberá simular una tirada de dado y retornar el resultado.
//Si no se te ocurre como hacer un número aleatorio, puedes usar la función Math.random()

function rollDice(caras){
    return Math.floor(Math.random() * (caras -1));
};

//¿Cómo funciona esto?
//1.- Pasamos el número de caras que queremos cómo parámetro
//2.- Con la función Math.floor lo que hace es redondear el número obtenido de lo pasado por parámetro . En este caso --> redondea el producto de generarl el número aleatorio y multiplicarle el número de caras -1
//3.- Con Math.randon() generamos el número aleatorio que nos servirá para las tiradas de dado

console.log("Tiramos el dado de 6 caras", rollDice(6));
console.log("Tiramos el dado de 8 caras", rollDice(8));