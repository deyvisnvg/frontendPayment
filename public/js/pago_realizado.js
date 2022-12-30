import { setUserForm } from "./principal.js"
const content = document.getElementById('content')

function formatData(payments, services, users) {
    return payments.map(({ id, user_id, service_id, amount, paymentDate, expirationDate }) => {
        const found_service = services.find(service => service.id == service_id)
        const found_user = users.find(user => user.id == user_id)
        return {
            id,
            user_id: found_user.username,
            service_id: found_service.name,
            amount,
            paymentDate,
            expirationDate,
            logo: found_service.logo
        }
    })
}

async function getPayments() {
    const id = new URLSearchParams(window.location.search).get("id")
    const extra = id ? `${id}/` : '';

    try {
        const response_user = await fetch(`http://127.0.0.1:8000/users/`);
        const response_service = await fetch(`http://127.0.0.1:8000/api/v2/services/`);
        const response = await fetch(`http://127.0.0.1:8000/api/v2/payment_user/${extra}`);
        const users = await response_user.json();
        const services = await response_service.json();
        const payments = await response.json();
        console.log(users)
        console.log(services.results)
        console.log(payments.results)


        const payments_format = formatData(payments.results, services.results, users)
        console.log(payments_format)
        id ? renderPayment(payments_format) : renderPayments(payments_format)
    } catch (error) {
        console.log(error);
    }
}

function renderPayments(context) {
    content.innerHTML += `      
    <div class="mb-5">
      <a href="./form.html" class="btn btn-primary">Crear</a>
    </div>`
    context.forEach(data => {
        content.innerHTML += `
    <div class="card m-3" style="width: 18rem;">
        <img src="${data.logo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.service_id}</h5>
            <p class="card-text">${data.user_id}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Fecha de Pago: ${data.paymentDate}</li>
            <li class="list-group-item">Vencimiento: ${data.expirationDate}</li>
        </ul>
        <div class="card-body">
        <a href="./detail.html?id=${data.id}" class="btn btn-primary">Ver Detalle</a>
        </div>
    </div>`;
    });
}

function renderPayment(data) {

}

getPayments();
// setUserForm();