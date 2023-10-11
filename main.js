const form = document.getElementById('form');

function validaForm(NumA, NumB) {
    const NumMaior = (NumB > NumA);
    return NumMaior;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const msgError = document.querySelector('error-message');

    if (!validaForm(NumA.value, NumB.value)){
        alert("Algo está errado, verifique as instruções novamente")

        NumA.value = '';
        NumB.value = '';

    } else
        alert("Tudo certo")
})





