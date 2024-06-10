/*Dupla: João Pedro Vidal dos Santos & Joicy Mendes Rodrigues
 Disciplina: Introdução ao Desenvolvimento Web
 Professor: Paulo Ricardo Noé */

let MeuArray = [];
let currentIndex = 0;
let isEditing = false;

function incluir() {
    console.log('incluindo...');
    document.getElementById('excluir').classList.add('botao-desabilitado');
    document.getElementById('editar').classList.add('botao-desabilitado');
    document.getElementById('nome').readOnly = false;
    document.getElementById('sobrenome').readOnly = false;
    document.getElementById('endereco').readOnly = false;
    document.getElementById('telefone').readOnly = false;
    document.getElementById('salvar').disabled = false;
    document.getElementById('cancelar').disabled = false;
    document.getElementById('salvar').classList.add('botao-normalsalvar');
    document.getElementById('cancelar').classList.add('botao-normalcancelar');
    document.getElementById('incluir').classList.add('botao-desabilitado');
    limparInputs();
    isEditing = false;
    autofocus = true;
}

function cancelar() {
    limparInputs();
    console.log('Cadastro cancelado.');
    document.getElementById('nome').readOnly = true;
    document.getElementById('sobrenome').readOnly = true;
    document.getElementById('endereco').readOnly = true;
    document.getElementById('telefone').readOnly = true;
    document.getElementById('salvar').disabled = true;
    document.getElementById('cancelar').disabled = true;
    document.getElementById('salvar').classList.remove('botao-normalsalvar');
    document.getElementById('cancelar').classList.remove('botao-normalcancelar');
    document.getElementById('salvar').classList.add('botao-desabilitado');
    document.getElementById('cancelar').classList.add('botao-desabilitado');
    document.getElementById('editar').classList.add('botao-desabilitado');
    document.getElementById('incluir').classList.remove('botao-desabilitado');
    document.getElementById('editar').disabled = true;
    isEditing = false;
    verificarArrayVazio();
}

function salvar() {
    document.getElementById('salvar').classList.remove('botao-normalsalvar');
    document.getElementById('excluir').disabled = false;
    document.getElementById('salvar').disabled = true;
    document.getElementById('editar').disabled = false;
    document.getElementById('excluir').classList.remove('botao-desabilitado');
    document.getElementById('editar').classList.remove('botao-desabilitado');
    document.getElementById('nome').readOnly = true;
    document.getElementById('sobrenome').readOnly = true;
    document.getElementById('endereco').readOnly = true;
    document.getElementById('telefone').readOnly = true;
    document.getElementById('cancelar').disabled = true;
    document.getElementById('cancelar').classList.remove('botao-normalcancelar');
    document.getElementById('incluir').classList.remove('botao-desabilitado');
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (!nome || !sobrenome || !endereco || !telefone) {
        alert('Por favor, preencha todos os campos antes de salvar ou cancele o cadastro.');
        document.getElementById('cancelar').classList.add('botao-normalcancelar');
        document.getElementById('excluir').classList.add('botao-desabilitado');
        document.getElementById('editar').classList.add('botao-desabilitado');
        document.getElementById('editar').disabled = true;
        document.getElementById('cancelar').disabled = false;
        return;
    }

    const cadastro = {
        nome: nome,
        sobrenome: sobrenome,
        endereco: endereco,
        telefone: telefone
    };

    if (isEditing) {
        MeuArray[currentIndex] = cadastro;
        console.log('Cadastro atualizado.');
    } else {
        MeuArray.push(cadastro);
        currentIndex = MeuArray.length - 1;
        console.log('Cadastro salvo.');
    }

    console.log("Valores armazenados: ", MeuArray);
    isEditing = false;
    verificarArrayVazio();
}

function limparInputs() {
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('telefone').value = '';
}

function primeiraposicao() {
    if (MeuArray.length > 0) {
        currentIndex = 0;
        const primeiroCadastro = MeuArray[0];
        document.getElementById('nome').value = primeiroCadastro.nome;
        document.getElementById('sobrenome').value = primeiroCadastro.sobrenome;
        document.getElementById('endereco').value = primeiroCadastro.endereco;
        document.getElementById('telefone').value = primeiroCadastro.telefone;
    } else {
        alert('Nenhum valor armazenado.');
    }
}

function avanca() {
    if (MeuArray.length > 0) {
        currentIndex++;
        if (currentIndex >= MeuArray.length) {
            currentIndex = MeuArray.length - 1;
        }
        const cadastro = MeuArray[currentIndex];
        document.getElementById('nome').value = cadastro.nome;
        document.getElementById('sobrenome').value = cadastro.sobrenome;
        document.getElementById('endereco').value = cadastro.endereco;
        document.getElementById('telefone').value = cadastro.telefone;
    } else {
        alert('Nenhum valor armazenado.');
    }
}

function recua() {
    if (MeuArray.length > 0) {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 0;
        }
        const cadastro = MeuArray[currentIndex];
        document.getElementById('nome').value = cadastro.nome;
        document.getElementById('sobrenome').value = cadastro.sobrenome;
        document.getElementById('endereco').value = cadastro.endereco;
        document.getElementById('telefone').value = cadastro.telefone;
    } else {
        alert('Nenhum valor armazenado.');
    }
}

function ultimaposicao() {
    if (MeuArray.length > 0) {
        currentIndex = MeuArray.length - 1;
        const ultimoCadastro = MeuArray[currentIndex];
        document.getElementById('nome').value = ultimoCadastro.nome;
        document.getElementById('sobrenome').value = ultimoCadastro.sobrenome;
        document.getElementById('endereco').value = ultimoCadastro.endereco;
        document.getElementById('telefone').value = ultimoCadastro.telefone;
    } else {
        alert('Nenhum valor armazenado.');
    }
}

function verificarInputs() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const editarButton = document.getElementById('editar');

    if (nome || sobrenome || endereco || telefone) {
        editarButton.disabled = false;
    } else {
        editarButton.disabled = true;
        console.log('Editando...');
    }
}

function editar() {
    document.getElementById('excluir').disabled = true;
    document.getElementById('excluir').classList.add('botao-desabilitado');
    document.getElementById('nome').readOnly = false;
    document.getElementById('sobrenome').readOnly = false;
    document.getElementById('endereco').readOnly = false;
    document.getElementById('telefone').readOnly = false;
    document.getElementById('salvar').disabled = false;
    document.getElementById('salvar').classList.add('botao-normalsalvar');
    document.getElementById('incluir').classList.add('botao-desabilitado');
    document.getElementById('cancelar').disabled = false;
    document.getElementById('cancelar').classList.add('botao-normalcancelar');
    console.log('Editando...');
    isEditing = true;
}

function excluir() {
    if (MeuArray.length > 0) {
        MeuArray.splice(currentIndex, 1);
        console.log('Cadastro excluído.');
        console.log('Array atualizado: ', MeuArray);

        if (MeuArray.length > 0) {
            if (currentIndex >= MeuArray.length) {
                currentIndex = MeuArray.length - 1;
            }
            const cadastro = MeuArray[currentIndex];
            document.getElementById('nome').value = cadastro.nome;
            document.getElementById('sobrenome').value = cadastro.sobrenome;
            document.getElementById('endereco').value = cadastro.endereco;
            document.getElementById('telefone').value = cadastro.telefone;
        } else {
            limparInputs();
            document.getElementById('editar').disabled = true;
            document.getElementById('excluir').disabled = true;
            verificarArrayVazio();
        }
    } else {
        alert('Nenhum valor armazenado.');
    }
}

function verificarArrayVazio() {
    const botoes = document.querySelectorAll('#excluir, #salvar, #cancelar, #editar');
    if (MeuArray.length === 0) {
        botoes.forEach(botao => {
            botao.classList.add('botao-desabilitado');
            botao.disabled = true;
        });
    }
}

verificarArrayVazio();



/*Dupla: João Pedro Vidal dos Santos & Joicy Mendes Rodrigues
 Disciplina: Introdução ao Desenvolvimento Web
 Professor: Paulo Ricardo Noé */

