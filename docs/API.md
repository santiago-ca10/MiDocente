# 🌐 Documentación API REST

Base URL:

```txt
http://localhost:3001
```

---

#  Endpoints disponibles

---

# Obtener todos los docentes

## GET

```http
GET /docentes
```

## Respuesta

```json
[
  {
    "id": 1,
    "nombre": "Mauricio Lopez",
    "correo": "mauricio@universidad.edu",
    "telefono": "3001234567",
    "titulo": "Maestria",
    "area_academica": "Ingenieria de Software",
    "dedicacion": "Tiempo Completo",
    "anios_experiencia": 5
  }
]
```

---

# Obtener docente por ID

## GET

```http
GET /docentes/:id
```

## Ejemplo

```http
GET /docentes/1
```

---

# Registrar docente

## POST

```http
POST /docentes
```

## Body

```json
{
  "nombre": "Mauricio Lopez",
  "correo": "mauricio@universidad.edu",
  "telefono": "3001234567",
  "titulo": "Maestria",
  "area_academica": "Ingenieria de Software",
  "dedicacion": "Tiempo Completo",
  "anios_experiencia": 5
}
```

## Respuesta exitosa

```json
{
  "message": "Docente registrado exitosamente"
}
```

---

# Actualizar docente

## PUT

```http
PUT /docentes/:id
```

## Ejemplo

```http
PUT /docentes/1
```

---

# Eliminar docente

## DELETE

```http
DELETE /docentes/:id
```

## Ejemplo

```http
DELETE /docentes/1
```

---

# ⚠️ Códigos HTTP utilizados

| Código | Significado |
|---|---|
| 200 | Solicitud exitosa |
| 201 | Registro creado |
| 400 | Error en datos enviados |
| 404 | Recurso no encontrado |
| 500 | Error interno del servidor |