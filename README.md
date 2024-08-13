# Chat Application for Virtual Classes

Este proyecto es una aplicación de chat para clases virtuales, desarrollada utilizando React, Express.js y PostgreSQL. La aplicación permite a los estudiantes y moderadores interactuar a través de un chat en tiempo real durante una clase en línea.

## Características

- **Chat en tiempo real**: Los mensajes se actualizan sin necesidad de recargar la página.
- **Autenticación de usuarios**: Solo los usuarios autenticados pueden acceder al chat.
- **Identificación de usuario**: Los mensajes muestran el nombre del usuario y su rol (estudiante o moderador).
- **Persistencia de mensajes**: Los mensajes del chat se almacenan en una base de datos PostgreSQL.
- **Diseño con Tailwind CSS**: La interfaz de usuario está estilizada con Tailwind CSS.

## Tecnologías Utilizadas

- **Frontend**: React con Vite
- **Backend**: Express.js
- **Base de Datos**: PostgreSQL
- **Estilos**: Tailwind CSS
- **ORM**: Sequelize
- **Sanitización**: ZOD
- **Patrón de Diseño**: MVC
- **Autenticación**: JSON Web Tokens (JWT)

## Requisitos Previos

Asegúrate de tener instalados los siguientes componentes antes de comenzar:

- Node.js (v14 o superior)
- PostgreSQL (v12 o superior)
- Git

## Instalación

Sigue estos pasos para clonar y configurar el proyecto en tu máquina local.

### 1. Clonar el Repositorio

```bash
git clone https://github.com/EdwarLe/kuepa-technical.git
cd tu-repositorio
```

### 2. Configurar el Backend

a. Instalar Dependencias

```bash
cd backend-chat
npm install
```

b. Configurar Variables de Entorno
Crea un archivo .env en la carpeta server con el siguiente contenido, ajustando los valores según tu configuración:

``` env
PORT=5000
DATABASE_URL=postgres://usuario:contraseña@localhost:5432/chat_db
JWT_SECRET=tu_secreto_jwt
```

c. Configurar la Base de Datos
Asegúrate de tener PostgreSQL ejecutándose y crea una base de datos llamada chat_db. Luego, ejecuta las migraciones para crear las tablas necesarias:

``` bash
npx sequelize-cli db:migrate
```

d. Iniciar el Servidor

``` bash
npm start
```

### 3. Configurar el Frontend

a. Instalar Dependencias

``` bash
cd ../frontend-chat
npm install
```

b. Configurar Tailwind CSS
Tailwind CSS ya está configurado en el proyecto. Si deseas modificar la configuración, puedes hacerlo en el archivo tailwind.config.js.

c. Iniciar la Aplicación React

``` bash
npm run dev
```

### 4. Acceder a la Aplicación

Una vez que el servidor backend y la aplicación frontend estén en ejecución, puedes acceder a la aplicación de chat en tu navegador en la siguiente URL:

``` arduino
http://localhost:5173
```

## Uso

- Registro e Inicio de Sesión: Los usuarios deben registrarse e iniciar sesión para acceder al chat.
- Acceso al Chat: Una vez autenticados, los usuarios pueden acceder directamente al chat.
- Envío de Mensajes: Los mensajes enviados aparecerán en tiempo real para todos los participantes.

## Estructura del Proyecto

``` plaintext
tu-repositorio/
├── client/                  # Carpeta del frontend (React)
│   ├── public/              # Archivos públicos
│   ├── src/                 # Código fuente de React
│   │   ├── components/      # Componentes de React
│   │   ├── context/         # Contextos de React
│   │   ├── pages/           # Páginas principales
│   │   ├── services/        # Servicios para llamadas a API
│   │   ├── App.jsx          # Componente principal
│   │   └── index.jsx        # Punto de entrada de React
│   └── tailwind.config.js   # Configuración de Tailwind CSS
├── server/                  # Carpeta del backend (Express)
│   ├── config/              # Configuración de la base de datos
│   ├── controllers/         # Controladores del MVC
│   ├── middlewares/         # Middlewares
│   ├── models/              # Modelos de Sequelize
│   ├── routes/              # Rutas de la API
│   ├── utils/               # Utilidades (e.g., JWT)
│   └── server.js            # Punto de entrada del servidor
└── README.md                # Este archivo
```