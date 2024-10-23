$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown(); /*esse evento faz o formulario aparecer no navegador ao clicar (nova imagem +)*/
    })

    $('#botao-cancelar').click(function() { /*esse evento faz o formulario retornar como no inicio da pagina*/
        $('form').slideUp();
    })

    $('form').on('submit', function(e) { /*2ª forma de remover o comportamento do formulário = (on)*/
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); /* ($)elemento no jQuest*/
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); /*efeito para surgir a imagem*/
        $('#endereco-imagem-nova').val(''); /*esse deixa o campo de inserir novo link limpo para o prox link*/
    })


})

