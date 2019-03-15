// ej 7
// crea un array con la gente que su nombre
// empieza por J y sean menores de 40 años
// utilizando el método filter de los arrays
// y muéstralo por consola.


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
nomb40 = new Array();
for (const iterator of gente) {
    if (iterator.edad < 40) {
        nomb40.push(iterator.nombre);
    }

}
console.log(nomb40);
nombJ = nomb40.filter(function (nombre) {
    return nombre.startsWith('J')
});
console.log(nombJ);
