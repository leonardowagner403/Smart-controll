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

const nomeUsuario = prompt("Digite seu nome");
exibirBoasvindas(nomeUsuario);




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
