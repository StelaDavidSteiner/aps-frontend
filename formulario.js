document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contato');
  const mensagem = document.getElementById('form-contato-msg');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    mensagem.style.color = 'green';
    mensagem.textContent = '✅ Formulário enviado com sucesso!';

  });
});
