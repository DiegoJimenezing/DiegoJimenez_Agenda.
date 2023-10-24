# DiegoJimenez_Agenda.
Diego santiago Jimenez Beltran 1001202256

# API REST de Contactos

Este es un proyecto de ejemplo que implementa una API REST para gestionar contactos. La API permite crear, leer, actualizar y eliminar contactos en una base de datos.

## Configuración Inicial

### Requisitos Previos

Asegúrate de tener instalados los siguientes componentes:

- Node.js y npm (Node Package Manager)
- MySQL o cualquier otro sistema de gestión de bases de datos que prefieras

### Creación de la Base de Datos

1. Se utilizó una base de datos MySQL para almacenar los datos de la aplicación.

2. Se creó una tabla `contacts` en la base de datos con los siguientes campos:
   - `id` (Clave primaria)
   - `identification_number` (Número de identificación)
   - `first_name` (Primer nombre)
   - `second_name` (Segundo nombre)
   - `first_lastname` (Primer apellido)
   - `second_lastname` (Segundo apellido)
   - `phone_numbers` (Números de teléfono en formato JSON)
   - `email_addresses` (Direcciones de correo electrónico en formato JSON)

Nota: el codigo en sql para crear la basedatos y la tabla se encuentra en db/database.sql

### Configuración del Servidor

3. Se configuró un servidor Node.js y se utilizó Express.js para crear la API.

4. Se estableció una conexión a la base de datos utilizando el paquete `mysql2`.

### Endpoints de la API

5. Se crearon los siguientes endpoints de la API:

   - `GET /contacts`: Obtener la lista de contactos.
   - `GET /contacts/:id`: Obtener un contacto por ID.
   - `POST /contacts`: Crear un nuevo contacto.
   - `PUT /contacts/:id`: Actualizar un contacto existente.
   - `DELETE /contacts/:id`: Eliminar un contacto.

7.Clona este repositorio en tu máquina local utilizando Git:
git clone https://github.com/TuUsuario/NombreDelRepositorio.git

8.Ingresa al directorio del proyecto:
cd NombreDelRepositorio

9.Instala las dependencias del proyecto:
npm install

10.Crea un archivo .env en la raíz del proyecto y configura las variables
de entorno necesarias. Asegúrate de configurar la información de conexión
a tu base de datos MySQL:
DB_HOST=tu-host-de-base-de-datos
DB_USER=tu-usuario-de-base-de-datos
DB_PASSWORD=tu-contraseña-de-base-de-datos
DB_DATABASE=tu-nombre-de-base-de-datos

11.Inicia el servidor de desarrollo:
npm start

### Formato de Datos

12. La API espera y devuelve datos en formato JSON.

### Ejemplo de Creación de Contacto

```json
{
  "identification_number": "12345",
  "first_name": "Juan",
  "second_name": "Carlos",
  "first_lastname": "Gómez",
  "second_lastname": "López",
  "phone_numbers": '["123-456-7890", "987-654-3210"]',
  "email_addresses": '["juan@gmail.com", "juan.carlos@example.com"]'
}





