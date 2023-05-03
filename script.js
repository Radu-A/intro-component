/*
const { fisrt, last, email, password } = data*/

/*Eventos inputs*/

const data = {
    first : '',
    last : '',
    email : '',
    password : ''
}

const first = document.querySelector("#first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formulario = document.getElementById("form");

first.addEventListener("input", reading);
last.addEventListener("input", reading);
email.addEventListener("input", reading);
password.addEventListener("input", reading);

function reading(event) {
    /*The name of the properties in "data" has to be the same as the ID*/
    data[event.target.id] = event.target.value;
}

/*conseguir pasar ID para que muestre la alerta en cada elemento*/
function showAlert(message, className) {
    const alert = document.createElement('p');
    alert.textContent = message;
    alert.classList.add(className);
    /*aqui manipular elemento*/
    //no funciona appendChild

    formulario.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}


formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    //Validar formulario//
    const {first, last, email, password} = data;

    if (first === '' || last === '' || email === '' || password === '') {
        if (first === '' ) {
            showAlert("First Name cannot be empty", 'error');
        }
        if (last === '' ) {
            showAlert('Second Name cannot be empty', 'error');
        }
        if (email === '') {
            showAlert('Looks like this is not an email', 'error');
        }
        if (password === '') {
            showAlert('Password cannot be empty', 'error');
        }
        showAlert("All field required", 'error');
        console.log("wrong");
    } else {
        showAlert("Submitted form", 'sent');
        console.log('right');
    }
    
})



