const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto)
{
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.lenght = 2;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroConta = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor');
    const mensagemSucesso = 'Montante de: $(valorDeposito.value) depositado para o cliente: $(nomeBeneficiario.value) - conta: $(numeroConta.value)';

    if (formValido)
    {    
        alert(mensagemSucesso);
    } else{
        alert('O nome não esta completo');
        }
})

console.log(form);
