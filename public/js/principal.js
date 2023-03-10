import { validar_login } from "./validar_login.js"
import { setUserForm } from "./setUser.js"

const content = document.getElementById('content');

validar_login();

async function getServices() {
    try {
        const response_service = await fetch(`http://127.0.0.1:8000/api/v2/services/`);
        const services = await response_service.json();
        console.log(services.results)

        renderPayments(services.results)
    } catch (error) {
        console.log(error);
    }
}

function renderPayments(context) {
    content.innerHTML += `      
    <div class="mt-5 p-3">
      <h1>Servicios Disponbles</h1>
    </div>`
    context.forEach(data => {
        content.innerHTML += `
    <div class="card m-3 mt-5" style="width: 18rem;">
        <img src="${data.logo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"></li>
        </ul>
    </div>`;
    });
}

getServices();
setUserForm();