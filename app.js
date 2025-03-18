// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
   let input = document.getElementById("amigo");
   let nombreAmigo = input.value.trim();

   if (!nombreAmigo) {
      alert("Por favor, inserte un nombre");
      return;
   }

   amigos.push(nombreAmigo);
   input.value = "";
   mostrarListaAmigo();  
}

function mostrarListaAmigo() {
   let listaAmigos = document.querySelector("#listaAmigos");
   listaAmigos.innerHTML = "";

   for (let i = 0; i < amigos.length; i++) {
     listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";
   }
}

function sortearAmigo() {
   if (amigos.length === 0) {
     alert("Por favor, inserte un nombre antes de sortear");
   } else {
     let indice = Math.floor(Math.random() * amigos.length);
     document.querySelector("#resultado").innerHTML = amigos[indice];
   }
}

