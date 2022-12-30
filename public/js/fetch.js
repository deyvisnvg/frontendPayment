function useLocalStorage(result) {
    const itemName = "credenciales";
    localStorage.setItem(itemName, JSON.stringify(result));
}

const ejecutar = async (data, event) => {
    event.preventDefault();
    await fetch(data.url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data.context)
    }).then(async response => {
        if (response.ok) {
            if (typeof data.name == 'undefined') {
                let result = await response.json();
                useLocalStorage(result);
            }
            Swal.fire(
                data.success.title,
                data.success.text,
                'success'
            ).then(result => {
                if (result.isConfirmed) {
                    window.location.replace(data.redirect)
                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: data.error.title,
                text: data.error.text,
            })
        }
    })
}

export {
    ejecutar,
}