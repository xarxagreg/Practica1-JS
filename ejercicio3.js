const vector=[1,13,2,125,102,1024,325,624,15];
let pares=[]
let mayorCien=[]
//Código para la solución de los números pares
for(let i=0; i<=vector.length-1;i++){
    if (vector[i]%2==0){
        
        pares.push(vector[i])
    }
}

console.log(`Los números pares que contiene el vector son: ${pares}`)

//Código para la solución de los números que son mayores de 100

for(let i=0; i<=vector.length-1;i++){
    if (vector[i]>100){
        
        mayorCien.push(vector[i])
    }
}

console.log(`Los números mayores de 100 que contiene el vector son: ${mayorCien}`)