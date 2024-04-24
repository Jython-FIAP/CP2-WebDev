
// Verificação de Idade
function confirmAge() {
   var isOver18 = confirm("Você tem mais de 18 anos?");
   if (isOver18) {
       window.location.href = "home.html"; // Página inicial
   } else {
       window.location.href = "https://github.com/Jython-FIAP/CP2-WebDev"; // Site para menores de 18 anos
   }
}

// -------------------------------- // 