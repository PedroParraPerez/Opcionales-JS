const dataset1 = [
  1,
  1,
  10,
  34,
  21,
  10,
  38,
  1,
  10,
  21,
  null,
  undefined,
  function() {}
];
const dataset2 = ["mama", "papa", "perro", "gato"];

/*
1 - Crees una funcion que limpie el array (elmine todo lo que no sean numeros).

2 - Crees una funcion que devuelva el array sin repeticiones dataset1.
3 - cuente las repeticiones de letras en el dataset2.
4 - que me devuleva el array al reves.
5 - que me devuelva el array al reves pero con las palabras al reves.

// REGLAS
* Usar programacion funcional (no usar objetos)
* Aplicar currificacion
* Prohibido break en los bucles

*/

// // // 1º  Crees una funcion que limpie el array (elimine todo lo que no sean numeros).
const FilterNumbers = arr => {
  const OnlyNum = arr.filter(item => typeof item == "number");
  console.log(OnlyNum);
};
FilterNumbers(dataset1);

// // // 2º Crees una funcion que devuelva el array sin repeticiones dataset1.

// // // Primera forma (OPTIMA) // Apartir de Set creamos un nuevo Array, y mediante la sintaxis Spread (...) confeccionamos ese nuevo Array con los valores del anterior sin que se repita ningun Item.

const NoRepts = arr => {
  const NewArray = new Set(arr);
  let final = [...NewArray];
  console.log(NewArray);
};
NoRepts(dataset1);

// // // Segunda forma (No optima)/ Asignaremos el los items de un Array a sus respectivos indices, pero una vez asignado un Item a un Index, ningun Item con diferentes Index aparecerá en el listado
// const Norept0 = (arr) =>{
// let result = arr.filter((item,index) =>
// dataset1.indexOf(item) === index);
// console.log(result);
// }
// Norept0(dataset1)

//   3º cuente las repeticiones de letras en el dataset2.

// Separacion y ordenacion de las letras en orden alfabético con el metodo sort
const Separate = arr => {
  return arr.join("").split("");
};
const str = Separate(dataset2);
const SeparateArray = str.sort();

let SingleElement = [];
let BucketRepts = [];
let cont = 1; //El contador empezará en cero por que todas las letras aparecen al menos una vez.

for (i = 0; i < SeparateArray.length; i++) {
  if (SeparateArray[i + 1] === SeparateArray[i]) {
    // if(SeparateArray[i+1] === SeparateArray[i]) ===>>Si el siguiente elemento es igual al anterior, estamos encontrando un elemento repetido.
    cont++;
  } else {
    SingleElement.push(SeparateArray[i]); // Creamos el array de las letras que tenemos quitando sus repeticiones.
    BucketRepts.push(cont); // Creamos el array con las repeticiones en las posiciones correspondientes a las letras.
    cont = 1; // En este caso deveremos indicar que el contador de letras se restablece en 1 para la siguiente letra.
  }
}
for (i = 0; i < SingleElement.length; i++) {
  if (BucketRepts[i] > 1) {
    console.log(
      `La letra ${SingleElement[i]} se repite ${BucketRepts[i]} veces.`
    );
  } else {
    console.log(
      `La letra ${SingleElement[i]} se repite ${BucketRepts[i]} vez.`
    );
  }
}

// /4º que me devuleva el array al reves.

const ArrayReverse = arr => {
  console.log(arr.reverse());
};
ArrayReverse(dataset2);

// 5º que me devuelva el array al reves pero con las palabras al reves.

const ArrayRev = arr => arr.reverse();                                      //En la primera parte del ejercicio pondremos el array al reves
const ReverseWord = arr => {
  return ArrayRev(arr).map(val => ArrayRev(val.split("")).join(""));        //En esta parte, utilizaremos map para transformar el array (volteado) en un nuevo array 
};                                                                          // que tenga la misma longitud pero con los item transformados

ReverseWord(ArrayRev(dataset2));                                            // Combinacion de ambas funciones para obtener el resultado deseado
