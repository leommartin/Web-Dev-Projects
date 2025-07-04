const botoes = document.querySelectorAll('.filtro-titulo');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const conteudo = botao.nextElementSibling;
    const estaVisivel = conteudo.style.display === 'block';
    conteudo.style.display = estaVisivel ? 'none' : 'block';
  });
});
