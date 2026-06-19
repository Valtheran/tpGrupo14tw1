const modal = document.getElementById('aprobar-modal');
const modalEmail = document.getElementById('modal-usuario-email');
const categoriaSelect = document.getElementById('categoria-select');
const confirmarButton = document.getElementById('confirmar-aprobar');
const cancelarButton = document.getElementById('cancelar-aprobar');
const cerrarButton = document.getElementById('cerrar-modal-aprobar');

function abrirModal(usuarioId, usuarioEmail) {
  modalEmail.textContent = usuarioEmail;
  categoriaSelect.value = '';
  confirmarButton.disabled = true;
  confirmarButton.classList.add('opacity-60', 'cursor-not-allowed');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  categoriaSelect.focus();
}

function cerrarModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

document.querySelectorAll('.abrir-modal-aprobar').forEach((boton) => {
  boton.addEventListener('click', () => {
    const usuarioId = boton.getAttribute('data-user-id');
    const usuarioEmail = boton.getAttribute('data-user-email');
    abrirModal(usuarioId, usuarioEmail);
  });
});

categoriaSelect.addEventListener('change', () => {
  const valid = categoriaSelect.value !== '';
  confirmarButton.disabled = !valid;
  confirmarButton.classList.toggle('opacity-60', !valid);
  confirmarButton.classList.toggle('cursor-not-allowed', !valid);
});

cancelarButton.addEventListener('click', cerrarModal);
cerrarButton.addEventListener('click', cerrarModal);
confirmarButton.addEventListener('click', cerrarModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    cerrarModal();
  }
});
