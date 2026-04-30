// servidor API

/// get 

const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());

app.use(express.json());

// Ruta 1 para obtener todos los docentes
app.get('/docentes', (req, res) => {
    const sql = 'SELECT * FROM docentes';
  db.query(sql, (err, results) => {
    if (err) {
        //500 Internal Server Error
        return res.status(500).json({ error: 'Error al obtener los docentes' });
    }
    res.json(results);
  });
});

// Ruta 2 para obtener un docente por ID
app.get('/docentes/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM docentes WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            //500 Internal Server Error
            return res.status(500).json({ error: 'Error al obtener el docente' });
        }
        res.json(results);

        if (!results.length) {
            //404 Not Found
            return res.status(404).json({ error: 'Docente no encontrado' });
        }
        res.json(results[0]);
    });
});


// Ruta 3 para guardar un nuevo docente

app.post('/docentes', (req, res) => {
    const { nombre, correo, telefono, titulo, area_academica, dedicacion, anios_experiencia } = req.body;
    if (!nombre.trim() || !correo.trim() || !telefono.trim() || !titulo.trim() || !area_academica.trim() || !dedicacion.trim()) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    const anios = Number(anios_experiencia);

    if(Number.isNaN(anios) || anios < 0) {
        return res.status(400).json({ error: 'Años de experiencia debe ser un número válido' });
    }
    const sql = 'INSERT INTO docentes (nombre, correo, telefono, titulo, area_academica, dedicacion, anios_experiencia) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
    db.query(sql, [nombre.trim(), correo.trim(), telefono.trim(), titulo.trim(), area_academica.trim(), dedicacion.trim(), anios], (err, result) => {
        if (err) {
            //500 Internal Server Error
            return res.status(500).json({ error: 'Error al guardar el docente' });
        }
        res.status(201).json({
            id: result.insertId,
            nombre: nombre.trim(),
            correo: correo.trim(),
            telefono: telefono.trim(),
            titulo: titulo.trim(),
            area_academica: area_academica.trim(),
            dedicacion: dedicacion.trim(),
            anios_experiencia: anios
        });
    });
});

// Ruta 4 para actualizar un docente por ID
app.put('/docentes/:id', (req, res) => {
    const { id } = req.params;

    const { nombre, correo, telefono, titulo, area_academica, dedicacion, anios_experiencia } = req.body;

    if (!nombre.trim() || !correo.trim() || !telefono.trim() || !titulo.trim() || !area_academica.trim() || !dedicacion.trim()) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const anios = Number(anios_experiencia);

    if (Number.isNaN(anios) || anios < 0) {
        return res.status(400).json({ error: 'Años de experiencia debe ser un número válido' });
    }

    const sql = 'UPDATE docentes SET nombre = ?, correo = ?, telefono = ?, titulo = ?, area_academica = ?, dedicacion = ?, anios_experiencia = ? WHERE id = ?';

    db.query(sql, [nombre.trim(), correo.trim(), telefono.trim(), titulo.trim(), area_academica.trim(), dedicacion.trim(), anios, id], (err) => {
        if (err) {

            return res.status(500).json({ error: 'Error al actualizar el docente' });
        }
        res.json({ message: 'Docente actualizado exitosamente' });
    });
});


// Ruta 5 para eliminar un docente por 
app.delete('/docentes/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM docentes WHERE id = ?';

    db.query(sql, [id], (err) => {
        if (err) {

            return res.status(500).json({ error: 'Error al eliminar el docente' });
        }
        res.json({ message: 'Docente eliminado exitosamente' });
    });
});

app.listen(3001, () => {
    console.log('Servidor backend corriendo en el puerto 3001');
});
