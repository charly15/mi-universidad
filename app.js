// Función para mostrar secciones
function mostrarSeccion(seccion) {
  const contenido = document.getElementById('contenido');

  if (seccion === 'inicio') {
    contenido.innerHTML = '<p>Bienvenido a Mi Universidad.</p>';
  } else if (seccion === 'materias') {
    fetch('materias.json')
      .then(response => response.json())
      .then(data => {
        let html = '<h2>Materias Inscritas</h2><ul>';
        data.forEach(materia => {
          html += `<li>${materia.codigo} - ${materia.nombre}</li>`;
        });
        html += '</ul>';
        contenido.innerHTML = html;
      })
      .catch(err => {
        contenido.innerHTML = '<p>No se pudieron cargar las materias.</p>';
        console.error(err);
      });
  } else {
    contenido.innerHTML = `<p>Sección ${seccion} en construcción.</p>`;
  }
}

// Registrar Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service Worker registrado', reg))
      .catch(err => console.error('Error al registrar SW', err));
  });
}

/*
Elementos del App Shell que se mantienen siempre:
- Encabezado
- Menú lateral
- Pie de página

Elementos que cambian dinámicamente:
- Contenedor principal (#contenido)
*/
