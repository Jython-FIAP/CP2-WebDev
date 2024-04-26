
// Verificação de Idade
function confirmAge() {
    var isOver18 = confirm("Você tem mais de 18 anos?");
    if (isOver18) {
        window.location.href = "login.html"; // Página inicial
    } else {
        window.location.href = "https://github.com/Jython-FIAP/CP2-WebDev"; // Site para menores de 18 anos
    }
}

// -------------------------------- // 


// Formulário de Login
const loginForm = document.getElementById("loginForm");
const loginInputUser = document.getElementById("user");
const loginInputPassword = document.getElementById("password");

const userc = { name: "1234", password: "1234" };

const handleLogin = (event) => {
    event.preventDefault();

    const enteredUsername = loginInputUser.value;
    const enteredPassword = loginInputPassword.value;

    if (userc.name === enteredUsername && userc.password === enteredPassword) {
        window.location.href = "home.html";
    } else {
        alert("Dados incorretos, tente novamente.");
    }
};

loginForm.addEventListener("submit", handleLogin);

// -------------------------------- // 


// Formulário de Contato 
document.getElementById('formulario').onsubmit = function(e) {
    e.preventDefault(); 
    alert("Sua mensagem foi enviada! Ficamos feliz com seu feedback :)");
}

// -------------------------------- // 
