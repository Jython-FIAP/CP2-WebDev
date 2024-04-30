
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

loginForm?.addEventListener("submit", handleLogin);

// Formulário de Contato 
var form = document.getElementById('formulario')
if(form) {
    form.onsubmit = function(e) {
            e.preventDefault(); 
            alert("Sua mensagem foi enviada! Ficamos feliz com seu feedback :)");
    }
}

// -------------------------------- // 
// Calculadora 
document.getElementById("resultado");
var precos = { // Variável preço que irá mapear o nome do vinho para o preço que ele contém 
    "Neugebauer": 240,
    "Miragem": 300,
    "Sangue": 290,
    "Xamã": 540,
    "Sinfonia": 190,
    "Possessão": 450
};

// Botões de Compra
const botoes = document.querySelectorAll('.btn');
	botoes.forEach(function(botao) {                        
    botao.addEventListener('click', function() {
        var vinho_selected = this.id;
        console.log(this.id);
        var vinho = getVinhos()[vinho_selected]; 
        var preco = vinho.preco
        if (preco !== undefined) {
            validarPreco(preco);
        } else {
            console.log("Vinho não encontrado.");
        }
    });
});

function getVinhos() {
    return {
        "Neugebauer": {
            preco: 240,
            comidas: [
                "../img/comidas/pastel.png",
                "../img/comidas/sandubao.png"
            ]
        },
        "Miragem": {
            preco: 300,
            comidas: [
                "../img/comidas/pastel.png",
                "../img/comidas/esfirra.png"
            ]
        },
        "Sangue": {
            preco: 290,
            comidas: [
                "../img/comidas/pasta.png"
            ]
        },
        "Xamã": {
            preco: 540,
            comidas: [
                "../img/comidas/xeque.webp",
                "../img/comidas/sandubao.png"
            ]
        },
        "Sinfonia": {
            preco: 190,
            comidas: [
                "../img/comidas/pastel.png",
                "../img/comidas/coxinha.png"
            ]
        },
        "Possessão": {
            preco: 450,
            comidas: [
                "../img/comidas/coxinha.png",
                "../img/comidas/xeque.png"
            ]
        }
    }
}

function getVinhoFromUrl() {
    const url = window.location.href; 
    const params = new URLSearchParams(new URL(url).search); 
    var paramValue = params.get('p');

    return getVinhos()[paramValue]
}

function validarPreco(preco) { 
    if (preco >= 100 && preco <= 1000) {
        console.log("Preço válido: " + preco);
    } else {
        console.log("Preço inválido: " + preco);
    }
}

const recomendacoes = document.getElementById("recomendacoes")
if(recomendacoes) {
    var ul = recomendacoes.appendChild(document.createElement("ul"))
    let vinho = getVinhoFromUrl()
    
    for(comida of vinho.comidas) {
        var img = ul.appendChild(document.createElement("li")).appendChild(document.createElement("img"))

        img.src = comida
        img.width = 150
    }
}

function calcular() {
    var vinho = getVinhoFromUrl()

    var qtd = parseInt(document.getElementById("qtd_vinho").value);
    var cupomValue = document.getElementById("cupom").value;

    var preco = parseInt(vinho.preco);
    var preco_total = 0;
    var preco_total = preco * qtd;
    var desconto = preco_total * 0.10;
        if(cupomValue =="FIAP2024"){
            var preco_total = preco_total-desconto;
            console.log(preco_total);
        }
    resultado.innerText = `R$${preco_total}`;

    var btn = document.getElementById("comprar-btn")
    btn.disabled = false;
}

function mesagem_enviada(){
    alert("Mensagem enviada com sucesso")
}

function comprar(){
    alert("Adicionado ao carrinho com sucesso")
}