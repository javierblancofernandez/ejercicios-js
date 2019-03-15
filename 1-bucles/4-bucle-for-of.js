// ej 4
// crea un array con la gente mayor de 25 años.
// y muéstralo por consola.
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of
// var iterable = [10, 20, 30]; for (var value of iterable) {   console.log(value); // 10, 20, 30 } 
let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]
mayor25=new Array();
for (const iterator of gente) {
    if(iterator.edad > 25){
        mayor25.push(iterator.nombre)
    }
    
}
console.log(mayor25);