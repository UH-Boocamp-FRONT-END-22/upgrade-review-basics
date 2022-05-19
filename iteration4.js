//Iteratio 4: Métodos findArrayIndex
//Crear una función findArrayIndex que reciba cómo parámetros un array de textos y un texto
//y devuelve la posición del array cuando el valor del array sea igual al valor del texto enviado por parámetro

const animales = ["Caracol", "Mosquito", "Salamandra", "Perro", "Gato"];

function findArrayIndex(array, text){
    if (array.includes(text)) {
        return `El animal ${text} está en tu array`;
    } else {
        return `El animal ${text} NO está en tu array`;
    }
};

//Ejemplo en el que si está el animal
console.log(findArrayIndex(animales, "Caracol")); 

//Ejemplo en el que no está el animal
console.log(findArrayIndex(animales, "Dinosaurio")); 