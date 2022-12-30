import { ejecutar } from "./fetch.js"
import { get_credencial } from "./validar_login.js"

const formLogin = document.getElementById("formLogin");


(function validar_credencial() {
    const credencial = get_credencial();

    if (credencial) {
        window.location.replace('./principal.html')
    }
})()

formLogin.addEventListener('submit', function (event) {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const data = {
        context: {
            email: email.value,
            password: password.value,
        },
        url: "http://127.0.0.1:8000/api/v2/login/",
        success: {
            title: "Login",
            text: "Logeado correctamente"
        },
        error: {
            title: "Oops...",
            text: "Correo inválido o contraseña incorrecta"
        },
        redirect: "./principal.html"
    }

    ejecutar(data, event)
});

