document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contato');
  const mensagem = document.getElementById('form-contato-msg');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    mensagem.style.color = 'green';
    mensagem.textContent = '✅ Formulário enviado com sucesso!';

    // Aqui você pode adicionar lógica para enviar os dados via AJAX ou resetar o formulário:
    // form.reset(); // Descomente se quiser limpar o formulário após o envio
  });
});
