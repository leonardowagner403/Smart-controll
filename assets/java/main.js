function validarLogin(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById('email');
    const mensagemErro = document.getElementById('mensagem-erro');

    if (!emailInput) return;

    const email = emailInput.value;
    
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        if (mensagemErro) {
            mensagemErro.innerText = "Por favor, insira um e-mail válido.";
            mensagemErro.style.display = "block";
        }
        return false;
    }

    if (mensagemErro) {
        mensagemErro.style.display = "none";
    }

    
    window.location.href = "dashboard.html";
}

function exibirBoasvindas(nomeCompleto) {
    const dataAtual = new Date();
    const diasSemana = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado"
    ];

    const diaSemana = diasSemana[dataAtual.getDay()];
    const dia = dataAtual.getDate().toString().padStart(2, "0");
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, "0");
    const ano = dataAtual.getFullYear();
    const hora = dataAtual.getHours().toString().padStart(2, "0");
    const minutos = dataAtual.getMinutes().toString().padStart(2, "0");

    let saudacao;

    if (hora < 12) {
        saudacao = "Bom Dia";
    } else if (hora < 18) {
        saudacao = "Boa Tarde";
    } else {
        saudacao = "Boa Noite";
    }

    const mensagem = `${saudacao}, ${nomeCompleto}. Hoje é ${diaSemana}, ${dia}/${mes}/${ano} - ${hora}:${minutos} (-03:00)`;
    document.getElementById("mensagemboasvindas").textContent = mensagem;
}

if (window.location.pathname.includes("dashboard.html")) {
    const nomeUsuario = prompt("Digite seu nome");
    
    if (nomeUsuario) {
        exibirBoasvindas(nomeUsuario);
    }
}




const campoBusca = document.getElementById("campoBusca");
const tabelaNomes = document.getElementById("tabelaNomes");
console.log(tabelaNomes)
campoBusca.addEventListener("input", function () {
    const busca = campoBusca.value.toLowerCase();

    const linhas = tabelaNomes.querySelectorAll("tr");

    linhas.forEach(function (linha) {
        const nome = 
linha.querySelector("td").textContent.toLowerCase();

        if (nome.includes(busca)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    });
});


const botaoTema = document.getElementById("botaoTema")
botaoTema.addEventListener("click",function () {
    document.body.classList.toggle("dark-theme");
});

const botaoMenu = document.querySelector("#botaoMenu");
const menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", function (e) {
    console.log(e.target)
    menu.classList.toggle("aberto");

    if
    (menu.classList.contains("aberto")) {
        botaoMenu.textContent = "X Fechar";
    } else {
        botaoMenu.textContent = "☰ Menu";
    }
});


function atualizarTelemetria() {
    const tempElemento = document.getElementById('temperatura');
    const painelAlerta = document.getElementById('painel-status');
    
    
    if (!tempElemento || !painelAlerta) return; 

    
    const tempSimulada = (Math.random() * (85 - 20) + 20).toFixed(1);
    tempElemento.textContent = `${tempSimulada} °C`;

    if (tempSimulada > 75) {
        painelAlerta.classList.remove('status-ativo');
        painelAlerta.classList.add('status-alerta');
        painelAlerta.innerHTML = "<strong>ALERTA:</strong> Superaquecimento!";
    } else {
        painelAlerta.classList.remove('status-alerta');
        painelAlerta.classList.add('status-ativo');
        painelAlerta.innerHTML = "Sistema Operando Normalmente";
    }
}

setInterval(atualizarTelemetria, 3000);



function adicionarDispositivo(event) {
    event.preventDefault(); 
    
    const inputNome = document.getElementById('nome-dispositivo');
    const lista = document.getElementById('lista-dispositivos');
    
    if (!inputNome || inputNome.value.trim() === '') return;

    
    const item = document.createElement('li');
    item.className = 'dispositivo-item status-inativo'; 
    item.innerHTML = `
        <span>${inputNome.value}</span>
        <button class="btn-toggle" onclick="alternarEstado(this)">Ligar</button>
    `;
    
    lista.appendChild(item);
    inputNome.value = ''; 
}

function alternarEstado(botao) {
    const item = botao.parentElement;
    
    if (item.classList.contains('status-inativo')) {
        item.classList.replace('status-inativo', 'status-ativo');
        botao.textContent = 'Desligar';
    } else {
        item.classList.replace('status-ativo', 'status-inativo');
        botao.textContent = 'Ligar';
    }
}




document.addEventListener("DOMContentLoaded", function() {
    
    
    if (window.jQuery && $('#ip-input').length) {
        $('#ip-input').mask('0Z0.0Z0.0Z0.0Z0', {
            translation: { 'Z': { pattern: /[0-9]/, optional: true } }
        });
    }

    const formParametros = document.getElementById('form-parametros');
    
    if (formParametros) {
        formParametros.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.getElementById('email-input').value;
            const ip = document.getElementById('ip-input').value;
            
           
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const regexIP = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

            if (!regexEmail.test(email)) {
                alert("Erro: Formato de E-mail inválido!");
                return;
            }
            if (!regexIP.test(ip)) {
                alert("Erro: Formato de IP inválido (Ex: 192.168.0.1)!");
                return;
            }
            
            alert("Parâmetros validados e salvos com sucesso!");
        });
    }
});
