/* USE MELIÁ – script.js
   Funcionalidade: validação simples do formulário de contato
   Exibe mensagem de confirmação visual ao enviar com campos preenchidos */

document.getElementById('formulario-contato').addEventListener('submit', function (evento) {
  evento.preventDefault();

  var nome      = document.getElementById('campo-nome');
  var email     = document.getElementById('campo-email');
  var mensagem  = document.getElementById('campo-mensagem');
  var sucesso   = document.getElementById('mensagem-sucesso');
  var campos    = [nome, email, mensagem];
  var valido    = true;

  // Remove estado inválido anterior
  campos.forEach(function (campo) { campo.classList.remove('invalido'); });
  sucesso.hidden = true;

  // Verifica se campos estão preenchidos
  campos.forEach(function (campo) {
    if (!campo.value.trim()) {
      campo.classList.add('invalido');
      valido = false;
    }
  });

  // Exibe confirmação se tudo estiver ok
  if (valido) {
    sucesso.hidden = false;
    this.reset();
  }
});
