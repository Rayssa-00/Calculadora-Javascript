let numeros = document.querySelector('.btn');
let telaResultado = document.querySelector('#result');
let conta;

function botao(value) {
    conta = telaResultado.value += value;
}

function limpar() {
    telaResultado.value = "";
}

function calcular() {
    let resultado = eval(conta);
    telaResultado.value = resultado;
}

function retirar() {
    const todoResultado = telaResultado.value;
    const ultimoResultado = todoResultado.substring(0, telaResultado.value.length - 1);
    console.log(ultimoResultado);

    telaResultado.value = ultimoResultado;
}

