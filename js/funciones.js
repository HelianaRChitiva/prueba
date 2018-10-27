
console.log('hola Mundo');
var numero1 = 10;
var numero2 = 34
var resultado = numero1 + numero2; 
console.log(resultado);

var cadena = 'El resultado es ';
console.log(cadena + resultado);

var cadena2 = 'Las \"tecnologÃ­as\"\n utilizadas en este programa son'
console.log(cadena2);

var semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo',123];
console.log(semana);
console.log(semana[1]);
semana[8] = 'otro valor';
console.log(semana);

for(var i = 0; i <= semana.length; i++ ){
    console.log(semana[i]);
}

for(dia in semana){
    console.log(dia);
    console.log(semana[dia]);
}

function suma()
{
    var n1 = 12;
    var n3 = 4;
    var res = n1 + n3;
    console.log('La suma es: '+ res);
};

suma();


function resta(valor1 , valor2){

    console.log(valor1-valor2);

}

resta(5,2);