
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

// Chamada Login
function Login() {
    var container_login = document.getElementById("container_login");
    var container = document.getElementById("container");

    container_login.style.display = "flex";
    container.style.display = "none";
}


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
        var container_login = document.getElementById("container_login");
        var container = document.getElementById("container");

    
        container_login.style.display = "none";
        container.style.display = "block";
     
    } else {
        alert("Dados incorretos, tente novamente.");
    }
};

//  loginForm.addEventListener("submit", handleLogin);

// // Formulário de Contato 
// document.getElementById('formulario').onsubmit = function(e) {
//     e.preventDefault(); 
//     alert("Sua mensagem foi enviada! Ficamos feliz com seu feedback :)");
// }

// JS 
document.getElementById("resultado");

var precos = { // Variável preço que irá mapear o nome do vinho para o preço que ele contém 
    "Neugebauer": 240,
    "Miragem": 300,
    "Sangue": 290,
    "Xamã": 540,
    "Sinfonia": 190,
    "Possessão": 450
};

const botoes = document.querySelectorAll('.btn');
	botoes.forEach(function(botao) {                        
    botao.addEventListener('click', function() {
        var vinho_selected = this.id;
        console.log(this.id);
        var preco = precos[vinho_selected]; 
        if (preco !== undefined) {
            validarPreco(preco);
        } else {
            console.log("Vinho não encontrado.");
        }
    });
});
 
var p =0

function validarPreco(preco) { 
    if (preco >= 100 && preco <= 1000) {
        console.log("Preço válido: " + preco);
    } else {
        console.log("Preço inválido: " + preco);
    }
}

function calcular() {
        const url = window.location.href; 
        const params = new URLSearchParams(new URL(url).search); 
        var paramValue = params.get('p');  
        p=paramValue;

    var qtd = parseInt(document.getElementById("qtd_vinho").value);
    var cupomValue = document.getElementById("cupom").value;

    var preco = parseInt(paramValue);
    var preco_total = 0;
    var preco_total = preco * qtd;
    var desconto = preco_total * 0.10;
        if(cupomValue =="FIAP2024"){
           var preco_total = preco_total-desconto;
           console.log(preco_total);
        }
    resultado.innerText = `O preço é ${preco_total}`;
    
}