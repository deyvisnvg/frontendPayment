import { get_credencial } from "./validar_login.js"

const user = document.getElementById('user');
const user2 = document.getElementById('user2');

function setUserForm() {
    const localStorageItem = get_credencial();

    const parsedItem = JSON.parse(localStorageItem);
    user.textContent = parsedItem.user.toUpperCase();
    user2.textContent = parsedItem.user.toUpperCase();
}

export {
    setUserForm
}