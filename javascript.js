function calculoTroco() {
    var valorPago = window.document.getElementById('valorPago')
    var custo = window.document.getElementById('custo')
    var troco = window.document.getElementById('troco')
    var vp = Number(valorPago.value)
    var c = Number(custo.value)
    var resultado = vp - c
    troco.innerHTML = `O seu troco é de <strong>R$${resultado}</strong>!`
    cardJs.style.backgroundColor = 'green';

    if (vp < c) {
        window.alert('Números incorretos!');
        return;
    }
}


var botao = window.document.getElementById('botao');

// Ocorre quando há hover no botão de resultado
function entrar() {
    botao.innerText = "Gerar!";
}

// Ocorre ao sair do hover no botão de resultado
function sair() {
    botao.innerText = "Resultado";
}
