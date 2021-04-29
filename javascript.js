function calculoTroco() {
    var valorPago = window.document.getElementById('valorPago')
    var custo = window.document.getElementById('custo')
    var troco = window.document.getElementById('troco')
    var vp = Number(valorPago.value) //conversão do valorPago de texto para número
    var c = Number(custo.value) //conversão do custo de texto para número
    var resultado = vp - c
    if (vp > c) {
        troco.innerHTML = `O seu troco é de <strong>R$${resultado}</strong>!`
        cardJs.style.backgroundColor = 'green';
    } else {
        if (vp < c) {
            window.alert('Números incorretos! Tente novamente.')
            return;
        }
    }
}

function somenteNumeros(dadoInserido) {
    var numeros = /^[0-9]+$/;
    if (dadoInserido.value.match(numeros)) {
        document.form1.text1.focus();
        return true;
    }
    else {
        window.alert('Somente números são válidos. Por favor, tente novamente.');
        document.form1.text1.focus();
        return false;
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
