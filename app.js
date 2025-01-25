
//Toda la estructura de Añadir amigo

function añadirAmigo(){
    //alert("hiciste click en añadir")
    let input = document.getElementById("amigo");
    let amigo = input.value.trim(); // Eliminamos espacios innecesarios

    /*Uso un if para indicar que no se agrege campos vacios, 
    pero también quería mostrar como Alert cuando se agregaba un nombre. */
    if(amigo === ""){
        alert("Por favor ingresa un nombre");
    }else {
        alert(`Se agrego el nombre ${amigo}`)
    }

    let lista = document.getElementById("listaAmigos") ;

    let opcion=document.createElement("li");

    opcion.textContent = amigo;

    lista.appendChild(opcion);

    input.value = ""; 

       }


//Toda la estructura de Sorteo
function sortearAmigo(){
    alert ("Agregar amigo");
    
}







/*QuerySelector permite acceder a cada uno de los elementos, abre parametros para que le insertemos datos ();
Con QuerySelector el le estoy diciendo a los elementos los traigo, le paso un nombre y se lo atribuyo
El objeto tiene metodos que definen su comportamiento

let numeroSecreto = 0;
//Al ser una variable no uso comillas para (elemento, texto)
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Acá aplicamos funciones, la llamamos de html con Onclick="texto()";
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else { 
        if(numeroDeUsuario > numeroSecreto) {       
        asignarTextoElemento("p", "El número secreto es menor");
        
    } else {
        asignarTextoElemento("p", "El número secreto es mayor");

    }
    intentos++;
    limpiarCaja();
}
return;
}

//Al poner numeral# QuerySelector sabe que lo queres por ID
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
    
}

function generarNumeroSecreto() {
    //Si el numero generado esta incluido en la lista hacemos una operacion sino otra
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
//si ya sorteamos todos los números podemos mostrar un mensaje y cerrar juego
if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento("p", "Lo siento, a se sortearon todos los número posibles")
}else { 

if(listaNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();
} else { 

    (listaNumerosSorteados.push(numeroGenerado))
        return numeroGenerado;

    } 
    //retornar quiere decir que nos retorne un valor
}

}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {

    //limpiar la caja
    limpiarCaja();

    //generar numero aleatorio
    //indicar mensaje de inicio
    //inicializar el número de intentos
    condicionesIniciales();

    //desahibilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
*/