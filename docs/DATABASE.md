# 🗄️ Documentación de Base de Datos

## Motor de base de datos utilizado

MySQL

---

#  Creación de base de datos

```sql
CREATE DATABASE gestion_docentes;
```

---

#  Uso de la base de datos

```sql
USE gestion_docentes;
```

---

#  Creación de tabla docentes

```sql
CREATE TABLE docentes
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(150) NOT NULL,
    correo VARCHAR(150) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    area_academica VARCHAR(150) NOT NULL,
    dedicacion VARCHAR(80) NOT NULL,
    anios_experiencia INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

#  Estructura de la tabla

| Campo | Tipo | Descripción |
|---|---|---|
| id | INT | Identificador único |
| nombre | VARCHAR(150) | Nombre completo |
| correo | VARCHAR(150) | Correo institucional |
| telefono | VARCHAR(50) | Número telefónico |
| titulo | VARCHAR(150) | Título académico |
| area_academica | VARCHAR(150) | Área académica |
| dedicacion | VARCHAR(80) | Tipo de dedicación |
| anios_experiencia | INT | Años de experiencia |
| created_at | TIMESTAMP | Fecha de creación |

---

#  Variables de entorno

Archivo `.env`

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=gestion_docentes
DB_PORT=3306
```