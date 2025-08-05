let amigos = []

function restaurarInput(){
    document.getElementById('amigo').value = ''
}

function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function agregarAmigo() {
    let amigoTextInput = document.getElementById('amigo').value.trim();
    if (amigoTextInput === '') {
        alert('No debe ser vacio');
        return;
    }
    if (amigos.includes(amigoTextInput)) {
        alert(`Ya ingreso un amigo con nombre ${amigoTextInput}`);
        return;
    }
    amigos.push(amigoTextInput);
    restaurarInput();
    mostrarListaAmigos();
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (amigos.length === 0) {
        resultado.innerHTML = '<li>No hay amigos para sortear.</li>';
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
