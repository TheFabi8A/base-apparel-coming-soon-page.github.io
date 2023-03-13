const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
let messageError = document.getElementById('message-error');
let arrowError = document.getElementById('arrow-error')
let btnSubmit = document.getElementById('btn-submit');

const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "email":
            validarCampo(expresiones.correo, e.target, 'email')
    }
}

const campos = {
    correo: false
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        messageError.classList.remove('view-error');
        messageError.setAttribute('value', 'ASDASDASDASD');
        campos[campo] = true;
    } else {
        messageError.classList.add('view-error');
        arrowError.classList.add('view-error')
        messageError.setAttribute('value', 'Please provide a valid email');
        campos[campo] = false;
    }

    // if (input.value.length == 0) {
    //     messageError.classList.add('view-error');
    //     messageError.setAttribute('value', 'Please provide a email')
    // }

    btnSubmit.addEventListener('click', () => {
        if (input.value.length == 0) {
            messageError.classList.add('view-error');
            messageError.setAttribute('value', 'Please provide a email');
        }
    });
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.correo = true) {
        formulario.reset();
        setTimeout(() => {
        }, 5000);
    } else {
    }
});