function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = ObterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){
            numero = ObterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
    
    //alert(sorteados);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`

    alterarstatusbotao();
    
/* Teste 2 valor = numero
    let numero = ObterNumeroAleatorio(de, ate);
    alert(numero);
*/
/* Teste 1
    alert(`Quantidade de números : ${quantidade}`);
    alert(`Do número : ${de}`);
    alert(`Até o número : ${ate}`);
*/

}

function ObterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    /*return Math.random() * (max - min) + min;*/
}

function alterarstatusbotao(){
    let botao = document.getElementById('btn-reiniciar');
        if (botao.classList.contains('container__botao-desabilitado')) {
                botao.classList.remove('container__botao-desabilitado');
                botao.classList.add('container__botao');
        } else {
                botao.classList.remove('container__botao');
                botao.classList.add('container__botao-desabilitado');
        }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarstatusbotao();
}