let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Esse nome já está na lista.')
    }

    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    inputAmigo.value = '';
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