const campoSenha = document.querySelector('#campo-senha');
const btnGerar = document.querySelector('#btn-gerar');
const valorEntropia = document.querySelector('#entropia');

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function gerarSenha() {
    let caracteresPossiveis = "";
    
    const querMaiusculo = document.querySelector('input[name="maiusculo"]').checked;
    const querMinusculo = document.querySelector('input[name="minusculo"]').checked;
    const querNumero = document.querySelector('input[name="numero"]').checked;
    const querSimbolo = document.querySelector('input[name="simbolo"]').checked;

    if (querMaiusculo) caracteresPossiveis += letrasMaiusculas;
    if (querMinusculo) caracteresPossiveis += letrasMinusculas;
    if (querNumero) caracteresPossiveis += numeros;
    if (querSimbolo) caracteresPossiveis += simbolos;

    if (caracteresPossiveis === "") {
        campoSenha.value = "Selecione uma opção!";
        valorEntropia.textContent = "";
        return;
    }

    let senhaFinal = "";
    let tamanhoDaSenha = 12; 

    for (let i = 0; i < tamanhoDaSenha; i++) {
        let indiceAleatorio = Math.floor(Math.random() * caracteresPossiveis.length);
        senhaFinal += caracteresPossiveis[indiceAleatorio];
    }

    campoSenha.value = senhaFinal;

    let entropia = tamanhoDaSenha * Math.log2(caracteresPossiveis.length);
    valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir essa senha.";
}

btnGerar.addEventListener('click', gerarSenha);




