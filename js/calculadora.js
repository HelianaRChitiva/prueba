function operar(operacion){

    if(document.getElementById("numUno").value == '' || document.getElementById("numDos").value == ''){
        alert('Por favor ingrese valores.');
    }

    var numUno = document.getElementById("numUno").value;
    var numDos = document.getElementById("numDos").value;
    var resultado;


    if(operacion =='+'){        
        resultado = parseInt(numUno) + parseInt(numDos);
        
    } else if(operacion =='-') {
        resultado = parseInt(numUno) - parseInt(numDos); 
    } else if(operacion =='*') {
        resultado = parseInt(numUno) * parseInt(numDos); 
    } else if(operacion =='/') {
        resultado = parseInt(numUno) / parseInt(numDos); 
    }

    document.getElementById("lblResultado").innerText = "Resultado: "+ resultado;
}