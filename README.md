# Proyecto Silabuz Unidad 5

Proyecto final de la Unidad 5

## Despliegue en Railway.app

APP: [apiFrontenPayment](https://deyvisnvg.github.io/frontendPayment/)

## Frontend API de pagos

Vistas de CRUD de pagos de los servicios.

### Login

Vista para el ingreso de los usuarios, este debe ser con email y contraseña.

Guardar token en local storage y únicamente mostrar la vista de login si es que el token no existe o es nulo.

Si el usuario no está logueado no tendrá acceso a las otras vistas.

### Vista principal

1. Navbar con links a la vista principal y para añadir un nuevo pago. Administrador: Link a servicios

   - Logo del servicio
   - Nombre del servicio
   - Fecha de pago
   - Monto

2. Lista de pagos realizados, cada card o ítem debe contener la siguiente información:

   - Logo del servicio
   - Nombre del servicio
   - Fecha de pago
   - Monto
   - Penalidad

### Vista para añadir un nuevo pago

Debe contener un forms con los siguientes campos:

- Fecha de vencimiento
- Servicio (lista desplegable)
- Monto
- Tomar en cuenta que la fecha de pago al momento de realizar el post, debe ser la fecha actual.

### Vista de servicios(únicamente para el administrador)

1. Forms de creación de un nuevo servicio:

   - Nombre del servicio
   - Prefijo
   - Url Logo

2. Forms de modificación de un servicio:

   - Lista de servicios (lista desplegable)
   - Nombre del servicio
   - Prefijo
   - Url Logo
