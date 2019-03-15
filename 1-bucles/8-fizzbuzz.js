// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS
contador=0;
for(var i=1 ;i<101;i++){
    contador=+i;
    if(contador%3==0 && contador%5==0){
        console.log("geekhubs")
    }
    else if(contador%3==0){
        console.log("geeks");
    }
    else if(contador%5==0){
        console.log("hubs");
    }
    else{
        console.log(contador);
    }
}
