
let numero1=parseInt(prompt("Introduzca el número A"));
let numero2=parseInt(prompt("Introduzca el número B"));

console.log(`El número "A" introducido tiene un valor de: ${numero1} el número "B" introducido tiene un valor de: ${numero2} `)


if (numero1>numero2){
    console.log(`El número mayor es el número "A" con un valor de: ${numero1}`)
}
else if(numero2>numero1){
    console.log(`El número mayor es el número "B" con un valor de: ${numero2}`)

}
else
console.log(`Lo sentimos el número "A y B" son iguales, debe elegir números diferentes`)


