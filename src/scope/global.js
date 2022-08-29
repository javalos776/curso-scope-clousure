// variables

var a; // declarando
var b = 'b' //declaramos / asignamos
b = 'bb'; //reasignacion
var a = 'aa'  //redeclaracion

//global scope
var fruit = 'Apple';
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function contries() {
    country = 'Mexico'; //globla
    console.log(country);
}

contries();
console.log(country);