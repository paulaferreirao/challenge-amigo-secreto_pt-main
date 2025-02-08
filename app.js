let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.valueMax.trim();

    // if (nomeAmigo === '') {
    //     alert('Por favor, insira um nome.');
    //     return;
    // }

    // if (amigos.includes(nomeAmigo)) {
    //     alert(`O nome ${nomeAmigo} já está na lista`);
    //     return;
    // } else {
    //     amigos.push(nomeAmigo);
    //     atualizarListaAmigos();
    //     inputAmigo = document.getElementById('input');
    //     inputAmigo.value = '';
    // }
}

function atualizarListaAmigos() { 
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(nomeAmigo => {
        let li = document.createElement('li');
        li.textContent = nomeAmigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Digite um nome.');
        return;
    }

    const numeroSorteado = Math.floor((Math.random) * amigos.length);
    const amigoSorteado = amigos[numeroSorteado];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}!`;
}
