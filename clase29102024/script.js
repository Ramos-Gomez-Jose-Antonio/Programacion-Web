//DECLARATIVO
const N = 6;
let multi = 1; 
let sum = 0;
let rest = 0;
let arr = [];

for (let i = 1; i <= N; i++) {
    arr[i] = i;
    sum += arr[i];
    multi *= arr[i];
    rest -= arr[i];
}

console.log("Fin del arreglo con tamaño " + arr.length +
            " con suma total: " + sum +
            " con multiplicación total: " + multi +
            " con resta total: " + rest);

//IMPERATIVO
            const N2 = 6;
const arr2 = Array.from({ length: N }, (_, i) => i + 1);

const sum2 = arr.reduce((acc, num) => acc + num, 0);
const multi2 = arr.reduce((acc, num) => acc * num, 1);
const rest2 = arr.reduce((acc, num) => acc - num, 0);

console.log(`Fin del arreglo con tamaño ${arr2.length} con suma total: ${sum2} con multiplicación total: ${multi2} con resta total: ${rest2}`);


//DECLARATIVO
for (let i = 1; i <= 10; i++) {
    console.log(`8 x ${i} = ${8 * i}`);
}



//IMPERATIVO
[...Array(10)].map((_, i) => console.log(`8 x ${i + 1} = ${8 * (i + 1)}`));
