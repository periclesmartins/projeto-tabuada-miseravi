function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert(`Por favor, digite um número!`)
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
document.getElementById("txtn").addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        tabuada();
    }
});

/*
Esse código é uma função JavaScript que calcula a tabuada de um número específico. A função pega o valor digitado pelo usuário em um elemento de input com o ID "txtn", verifica se o valor está vazio e, se estiver, exibe uma mensagem de alerta para o usuário digitar um número. Caso contrário, a função pega o valor digitado, converte-o para um número (Number) e usa um loop "while" para calcular e exibir cada produto da tabuada (de 1 a 10) em um elemento "select" com o ID "seltab".
*/

