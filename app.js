let amigos = [];

//ESTRUCTURA DE AÑADIR AMIGO Y LISTAS

function añadirAmigo(){
    //alert("hiciste click en añadir")
    let input = document.getElementById("amigo");
    let amigo = input.value.trim(); // Eliminamos espacios innecesarios

    
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === amigo) {  // Compara cada nombre con el nuevo
            alert("Este nombre ya fue agregado.");
            return; // Sale de la función si encuentra el nombre
            
        }
    }

    /*Uso un if para indicar que no se agrege campos vacios, 
    pero también quería mostrar como Alert cuando se agregaba un nombre. */
    
    if(amigo === ""){
        alert("Por favor ingresa un nombre");
    }else {
        alert(`Se agrego el nombre ${amigo}`)
    }

    amigos.push(amigo);
    console.log(amigos)

    let lista = document.getElementById("listaAmigos") ;

    let opcion=document.createElement("li");

    opcion.textContent = amigo;

    lista.appendChild(opcion);

    input.value = ""; 

       }


//ESTRUCTURA DEL SORTEO

function sortearAmigo(){
    //alert ("Sorteo");
    let lista = document.getElementById("listaAmigos").children;
    let resultado = document.getElementById("resultado");

    if (lista.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    } 

    
    let indiceGanador = Math.floor(Math.random() * lista.length);
    let ganador = lista[indiceGanador].textContent;

    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong> 🎉</li>`;

}