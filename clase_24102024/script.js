// Arreglos
/*
let array = ["dato1",1,Boolean];


console.log("tamaño array: " +array.length);
array.push("2");          //push=ingresar o insertar algo
console.log(array[3]);
console.log("nuevo tamaño array: " +array.length);



5*1 = 5
5*2 = 10
5*3 = 15
5*4 = 20
5*5 = 25
5*6 = 30
fin del arreglo valor de la posicion = 30

length
push
for
*/ 

const N = 10;
const x = 5;
let arr = [];

for (let i = 1; i <= N; i++) {
    arr[i] = x * i;
    if (i <= 6) {
        console.log(x + "x" + i + "=" + arr[i]);
    }
}
console.log("Fin del arreglo con tamaño " + arr.length + " y valor en la posición: "+ arr[6]);

