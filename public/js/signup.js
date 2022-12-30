import { ejecutar } from "./fetch.js"

const formSignup = document.getElementById("formSignup")

formSignup.addEventListener('submit', function (event) {
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const staff_status = document.getElementById("staff_status");

    const data = {
        context: {
            email: email.value,
            username: username.value,
            password: password.value,
            is_staff: staff_status.checked,
        },
        url: "http://127.0.0.1:8000/users/signup/",
        success: {
            title: "Creado",
            text: "Los datos se guardaron correctamente"
        },
        error: {
            title: "Oops...",
            text: "¡Ocurrio un error"
        },
        redirect: "./index.html",
        name: "signup"
    }

    ejecutar(data, event)
})