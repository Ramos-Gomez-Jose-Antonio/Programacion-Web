/*funcion= que nos ayuda a reutilizar codigo :)

//definicion de una funcion
function hello(){
    console.log('Hola Clase');
    console.log('5IV7');
    
}

//llamada a la funcion
hello();
hello();
hello();
hello();
hello();

//Retorno de una Funcion
function hello(){
    return 'Hola Clase';
}

const result = hello();
console.log(result);

//funcion que retorna otra funcion
function hello(){
    return function(){
        return 'Hola soy la funcion 2';
    }
}
console.log(hello()());

//Definir parametros
function add(x){
    console.log(x);

}
add(5);

//Definir multiarametros
function add(x,y){
    console.log(x+y);

}
add(5, undefined);

//control de error en multiparametros
function add(x,y){
    if(y===undefined){
        y=0;
    }
    console.log(x+y);

}
add(5, undefined)

//parametro cadena
function add(name){
    
    console.log('Hola ' +name);
}
add("Clase JS");
*/

//Objetos
const user = {
    nombre:'Juanito',
    ApellidoP: 'Alcachofa',
    ApellidoM: 'Perez',
    edad: 31,
    direccion: {
        calle:'Nicolas Bravo',
        no: 598,
        colonia: 'Narvarte',
        delegacion: 'Los Pinos'
    },
    amigos:['Pancrasio', 'Panfiloberta'],
    activo: true

} 
nombres(user)



//consola nombre apellidoP apellidoM
// alert activo;
//consola edad
// alert calle, no, colonia, delegacion
//consola amigos

    function nombres(user){
        console.log(user.nombre + " " + user.ApellidoP+ " " +user.ApellidoM);
        alert(user.activo);
        console.log(user.edad);
        alert(user.direccion.calle + " " + user.direccion.no + " " + user.direccion.colonia + " " + user.direccion.delegacion);
        console.log(user.amigos[0]+ " " + user.amigos[1]);
    }


