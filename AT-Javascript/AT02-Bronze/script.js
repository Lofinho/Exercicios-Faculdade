// Utilize prompt e alert para solucionar essa questão.
// Crie um programa que pergunte o nome do usuário, atribua a uma variável, valide se foi digitado algo e exiba uma mensagem apropriada: uma saudação se foi validado com sucesso ou uma mensagem de erro, caso contrário.

// A validação é bem simples: verifique apenas se algo foi digitado.

// Ex: "Bem Vindo, Machado de Assis" ou "Erro: digite um nome".

function pedirNome() {
    let nome = prompt('Digite seu primeiro e segundo nome');

    if (nome === '' || nome === null) {
        alert('[ERRO] campo vazio');
        pedirNome();
    }else if (!verificaLetras(nome)) {
        alert('Digite apenas letras');
        pedirNome();
    } else {
        alert(`Bem vindo, ${nome}`);
    }
}

function verificaLetras(letras) {
    return /^[a-zA-Z\s.,]+$/.test(letras);
}

pedirNome()