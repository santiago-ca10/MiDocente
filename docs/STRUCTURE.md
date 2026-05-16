# 🏗️ Arquitectura y Estructura del Proyecto

---

#  Estructura general

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
│
├── 📁 docs
│   ├── 📝 API.md
│   ├── 📝 DATABASE.md
│   ├── 📝 INSTALLATION.md
│   ├── 📝 STRUCTURE.md
│   ├── 📝 TESTING.md
│   └── 📁 images
│
├── 📁 server
│   ├── ⚙️ .env.example
│   ├── 📄 db.js
│   ├── 📄 index.js
│   ├── ⚙️ package.json
│   └── ⚙️ package-lock.json
│
├── ⚙️ .gitignore
├── 📄 LICENSE
└── 📝 README.md
```

---

#  Frontend

Desarrollado con React.js.

Funciones principales:

- Formularios dinámicos
- Consumo de API REST
- Manejo de estados
- Validaciones visuales
- Interfaz responsive

---

#  Backend

Desarrollado con Node.js y Express.

Funciones principales:

- API REST
- Validaciones
- Manejo de errores HTTP
- Conexión con MySQL
- CRUD de docentes

---

#  Base de datos

MySQL es utilizado para almacenar la información de docentes universitarios.

---

#  Flujo del sistema

```txt
Frontend React
       ↓
Fetch API
       ↓
Backend Express
       ↓
MySQL
```