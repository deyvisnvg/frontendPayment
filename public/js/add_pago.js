import { ejecutar } from "./fetch.js"
import { validar_login, get_credencialJson } from "./validar_login.js"
import { setUserForm } from "./principal.js"

const formPago_add = document.getElementById("formPago_add")

formPago_add.addEventListener('submit', function (event) {
    const expirationDate = document.getElementById("expirationDate");
    const service = document.getElementById("service");
    const amount = document.getElementById("amount");
    const paymentDate = document.getElementById("paymentDate");

    const data = {
        context: {
            user_id: get_credencialJson().id,
            expirationDate: expirationDate.value,
            service_id: service.value,
            amount: parseFloat(amount.value),
            paymentDate: paymentDate.value,
        },
        url: "http://127.0.0.1:8000/api/v2/payment_user/",
        success: {
            title: "Creado",
            text: "Los datos se guardaron correctamente"
        },
        error: {
            title: "Oops...",
            text: "¡Ocurrio un error"
        },
        redirect: "./add_pago.html"
    }

    ejecutar(data, event)
})

validar_login()
setUserForm();