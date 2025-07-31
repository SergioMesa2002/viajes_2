document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formContacto');
  const alerta = document.getElementById('alertaMensaje');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita recargar la página

    // Mostrar la alerta
    alerta.classList.remove('d-none');
    alerta.classList.add('show');

    // Limpiar el formulario
    form.reset();
  });
});
