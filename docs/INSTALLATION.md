# ⚙️ Instalación del Proyecto

---

#  1. Clonar el repositorio

```bash
git clone https://github.com/santiago-ca10/MiDocente.git
```

---

#  2. Instalar dependencias frontend

```bash
cd client
npm install
```

---

#  3. Instalar dependencias backend

```bash
cd ../server
npm install
```

---

#  4. Configurar MySQL

Crear base de datos:

```sql
CREATE DATABASE gestion_docentes;
```

Importar o crear la tabla `docentes`.

---

#  5. Configurar variables de entorno

Crear archivo `.env` dentro de `server`.

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=gestion_docentes
DB_PORT=3306
```

---

#  6. Ejecutar backend

```bash
cd server
npm start
```

Servidor backend:

```txt
http://localhost:3001
```

---

#  7. Ejecutar frontend

```bash
cd client
npm start
```

Aplicación frontend:

```txt
http://localhost:3000
```