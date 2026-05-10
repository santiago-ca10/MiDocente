# 🎓 Sistema de Gestión de Docentes Universitarios

Aplicación web full stack para la gestión de docentes universitarios mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

El proyecto fue desarrollado bajo una arquitectura cliente-servidor utilizando React para el frontend, Node.js + Express para el backend y MySQL como sistema gestor de base de datos.

---

# Tecnologías utilizadas

## Frontend

* React.js
* CSS3
* Fetch API

## Backend

* Node.js
* Express.js
* CORS
* MySQL2 / MySQL

## Base de datos

* MySQL

---

# Características principales

- Registro de docentes
- Consulta de docentes registrados
- Actualización de información
- Eliminación de registros
- Validación de datos en backend
- Arquitectura cliente-servidor
- API REST
- Manejo de errores HTTP
- Interfaz responsive y moderna

---

#  Arquitectura del proyecto

```bash
├── 📁 client
│   ├── 📁 public
│   ├── 📁 src
│   │   ├── 🎨 App.css
│   │   ├── 📄 App.js
│   │   ├── 🎨 index.css
│   │   └── 📄 index.js
│   ├── ⚙️ package.json
│   └── 📝 README.md
├── 📁 server
│   ├── ⚙️ .env.example
│   ├── 📄 db.js
│   ├── 📄 index.js
│   ├── ⚙️ package.json
│   └── ⚙️ package-lock.json
│
├── ⚙️ .gitignore
└── 📝 README.md
```

---

#  Instalación del proyecto

##  Clonar el repositorio

```bash
git clone https://github.com/usuario/nombre-repositorio.git
```

---

##  Instalar dependencias del frontend

```bash
cd client
npm install
```

---

##  Instalar dependencias del backend

```bash
cd ../server
npm install
```

---

#  Configuración de la base de datos

Crear una base de datos en MySQL:

```sql
CREATE DATABASE gestion_docentes;
```

Crear la tabla:

```sql
CREATE TABLE docentes
(
	id INT primary key auto_increment,
    nombre VARCHAR(150) not null,
    correo VARCHAR(150) not null,
    telefono VARCHAR(50) not null,
    titulo VARCHAR(150) not null,
	area_academica VARCHAR(150) not null,
    dedicacion VARCHAR(80) not null,
    anios_experiencia INT not null default 0,
    createt_at timestamp default current_timestamp
);
```

---

#  Configuración del entorno

Crear un archivo `.env` dentro de la carpeta `server`.

Ejemplo:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=gestion_docentes
DB_PORT=3306
```

---

# Ejecución del proyecto

## Backend

Desde la carpeta `server`:

```bash
npm start
```

Servidor ejecutándose en:

```bash
http://localhost:3001
```

---

## Frontend

Desde la carpeta `client`:

```bash
npm start
```

Aplicación ejecutándose en:

```bash
http://localhost:3000
```

---

#  Endpoints de la API REST

| Método | Endpoint      | Descripción                |
| ------ | ------------- | -------------------------- |
| GET    | /docentes     | Obtener todos los docentes |
| GET    | /docentes/:id | Obtener docente por ID     |
| POST   | /docentes     | Registrar nuevo docente    |
| PUT    | /docentes/:id | Actualizar docente         |
| DELETE | /docentes/:id | Eliminar docente           |

---

#  Funcionalidades del sistema

##  Registro de docentes

Permite registrar información académica y de contacto de docentes universitarios.

##  Edición de registros

Actualiza datos existentes mediante formularios dinámicos.

##  Eliminación de docentes

Permite eliminar registros de forma permanente.

## Consumo de API REST

El frontend consume servicios REST desarrollados en Express.

---

#  Validaciones implementadas

* Campos obligatorios
* Validación de números
* Validación de años de experiencia
* Manejo de errores HTTP
* Validación de datos vacíos

---

#  Conceptos aplicados

* Arquitectura cliente-servidor
* CRUD
* API REST
* Manejo de estados con React Hooks
* Fetch API
* Programación asíncrona
* Express Middleware
* MySQL Queries
