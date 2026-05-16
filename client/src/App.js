import {useState, useEffect} from 'react';
import './App.css';

function App() {

  // memoria del formulario
  // crear los estados para cada campo del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [titulo, setTitulo] = useState("");
  const [areaAcademica, setAreaAcademica] = useState("");
  const [dedicacion, setDedicacion] = useState("");
  const [aniosExperiencia, setAniosExperiencia] = useState(0);

  const [registros, setRegistros] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  // Función para capitalizar texto sin bloquear espacios
  const capitalizarTexto = (texto) => {
    return texto.replace(/\b\w/g, (letra) => letra.toUpperCase());
  };

  useEffect(() => {
    cargarDocentes();
  }, []);

  const cargarDocentes = async () => {
    try {

      const response = await fetch('http://localhost:3001/docentes');

      const data = await response.json();

      setRegistros(data);

    } catch (error) {

      alert('Error al cargar los docentes: ' + error.message);
    }
  };

  const limpiarFormulario = () => {

    setNombre('');
    setCorreo('');
    setTelefono('');
    setTitulo('');
    setAreaAcademica('');
    setDedicacion('');
    setAniosExperiencia(0);
  };

  const registrarDatos = async (e) => {

    e.preventDefault();

    const payload = {
      nombre,
      correo,
      telefono,
      titulo,
      area_academica: areaAcademica,
      dedicacion,
      anios_experiencia: aniosExperiencia
    };

    if (editIndex !== null) {

      // Actualizar un registro existente
      try {

        const docente = registros[editIndex];

        const response = await fetch(`http://localhost:3001/docentes/${docente.id}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        });

        if (response.ok) {

          const nuevosRegistros = [...registros];

          nuevosRegistros[editIndex] = {
            ...docente,
            nombre,
            correo,
            telefono,
            titulo,
            area_academica: areaAcademica,
            dedicacion,
            anios_experiencia: aniosExperiencia
          };

          setRegistros(nuevosRegistros);

          setEditIndex(null);

          alert('Docente actualizado exitosamente');

        } else {

          const err = await response.json().catch(err => err);

          alert(err.error || 'Error al actualizar el docente');
        }

      } catch (error) {

        alert('Error de conexión al actualizar el docente');
      }

    } else {

      try {

        // Camino de guardar un nuevo registro
        const response = await fetch('http://localhost:3001/docentes', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok) {

          setRegistros([...registros, data]);

          alert('Docente registrado exitosamente');

        } else {

          alert(data.error || 'Error al registrar el docente');
        }

      } catch (error) {

        alert('Error de conexión al registrar el docente');
      }
    }

    limpiarFormulario();
  };

  const eliminarRegistro = async (idx) => {

    const docente = registros[idx];

    try {

      const response = await fetch(`http://localhost:3001/docentes/${docente.id}`, {
        method: 'DELETE'
      });

      if (response.ok) {

        const nuevosRegistros = registros.filter((_, i) => i !== idx);

        setRegistros(nuevosRegistros);

        if (editIndex === idx) {

          setEditIndex(null);

          limpiarFormulario();
        }

        alert('Docente eliminado exitosamente');

      } else {

        alert('Error al eliminar el docente');
      }

    } catch (error) {

      alert('Error de conexión al eliminar el docente');
    }
  };

  const editarRegistro = (idx) => {

    const reg = registros[idx];

    setNombre(reg.nombre);
    setCorreo(reg.correo);
    setTelefono(reg.telefono);
    setTitulo(reg.titulo);
    setAreaAcademica(reg.area_academica);
    setDedicacion(reg.dedicacion);
    setAniosExperiencia(reg.anios_experiencia);

    setEditIndex(idx);
  };

  return (
    <div className="main-container">

      {/* Contenedor Principal del Formulario */}
      <div className="form-card">

        <h2>Gestión de docentes universitarios</h2>

        <p className="subtitle">
          Registro de profesores: datos académicos y de contacto
        </p>

        <form onSubmit={registrarDatos}>

          {/* Primera Fila: Nombre, Correo, Teléfono, Título y Área */}
          <div className="form-row">

            <div className="form-group">
              <label>Nombre completo:</label>

              <input
                type="text"
                placeholder="Ej. María Fernanda López"
                value={nombre}
                onChange={(e) => setNombre(capitalizarTexto(e.target.value))}
                required
              />
            </div>

            <div className="form-group">
              <label>Correo institucional:</label>

              <input
                type="email"
                placeholder="nombre@universidad.edu"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Teléfono:</label>

              <input
                type="text"
                placeholder="Ej. +57 300 1234567"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Título académico máximo:</label>

              <input
                type="text"
                placeholder="Ej. Doctorado, Maestría..."
                value={titulo}
                onChange={(e) => setTitulo(capitalizarTexto(e.target.value))}
                required
              />
            </div>

            <div className="form-group">
              <label>Área o programa académico:</label>

              <input
                type="text"
                placeholder="Ej. Ingeniería de Software"
                value={areaAcademica}
                onChange={(e) => setAreaAcademica(capitalizarTexto(e.target.value))}
                required
              />
            </div>

          </div>

          {/* Segunda Fila: Dedicación y Años de Experiencia */}
          <div className="form-row short">

            <div className="form-group">

              <label>Dedicación:</label>

              <select
                value={dedicacion}
                onChange={(e) => setDedicacion(e.target.value)}
                required
              >
                <option value="">Tiempo completo, medio tiempo...</option>
                <option value="Tiempo Completo">Tiempo Completo</option>
                <option value="Medio Tiempo">Medio Tiempo</option>
                <option value="Cátedra">Cátedra</option>
              </select>

            </div>

            <div className="form-group">

              <label>Años de experiencia docente:</label>

              <input
                type="number"
                value={aniosExperiencia}
                onChange={(e) => setAniosExperiencia(e.target.value)}
                required
              />

            </div>

          </div>

          <button type="submit" className="btn-register">
            {editIndex !== null ? 'Actualizar' : 'Registrar'}
          </button>

        </form>
      </div>

      {/* Contenedor de la Tabla */}
      <div className="table-card">

        <table className="docentes-table">

          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Título</th>
              <th>Área académica</th>
              <th>Dedicación</th>
              <th>Años doc.</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>

            {registros.map((reg, idx) => (

              <tr key={idx}>

                <td>{reg.nombre}</td>
                <td>{reg.correo}</td>
                <td>{reg.telefono}</td>
                <td>{reg.titulo}</td>
                <td>{reg.area_academica}</td>
                <td>{reg.dedicacion}</td>
                <td>{reg.anios_experiencia}</td>

                <td className="actions">

                  <button
                    className="btn-edit"
                    onClick={() => editarRegistro(idx)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn-delete"
                    onClick={() => eliminarRegistro(idx)}
                  >
                    Eliminar
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}

export default App;