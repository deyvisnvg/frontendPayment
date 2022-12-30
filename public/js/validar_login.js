function get_credencial() {
    const localStorageItem = localStorage.getItem("credenciales");
    return localStorageItem
}

function get_credencialJson() {
    const storageItem = get_credencial();
    return JSON.parse(storageItem);
}

function validar_login() {
    const storageItem = get_credencial();

    if (!storageItem) {
        window.location.replace('./index.html')
    }
}


export {
    get_credencial,
    get_credencialJson,
    validar_login
}


// const localStorageItem = localStorage.getItem(itemName);
// let parsedItem;

// if (!localStorageItem) {
//     localStorage.setItem(itemName, JSON.stringify(initialValue));
//     parsedItem = initialValue;
// } else {
//     parsedItem = JSON.parse(localStorageItem);
// }