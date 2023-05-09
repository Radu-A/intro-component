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


formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    //Validar formulario//
    const {first, last, email, password} = data;

    if (first === '' || last === '' || email === '' || password === '') {
        if (first === '' ) {
            //hacer que desaparezca
            document.querySelector("#afirst").style.display = "block";
            document.querySelector("#first").classList.add("error");
        }
        if (last === '' ) {
            document.querySelector("#alast").style.display = "block";
            document.querySelector("#last").classList.add("error");
        }
        if (email === '') {
            document.querySelector("#aemail").style.display = "block";
            document.querySelector("#email").classList.add("error");
        }
        if (password === '') {
            document.querySelector("#apassword").style.display = "block";
            document.querySelector("#password").classList.add("error");
        }
    } else {
        showAlert("Submitted form", 'sent');
    }
    
})



