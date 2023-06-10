$(document).ready(function() {
    //Seletor de id
    $('#btn').click(function() {
        console.log('Olá mundo!');
    })
    //Seletor de classe
    $('.img').click(function(){
        alert('Thorfin de Visland Saga');
    })

    //Testes com jQuery

    //Alterando cor de fundo do elemento h1
    $('h1').css('background-color', '#eeaaff');
    
    //Alterando cor de fundo do elemento p específico
    $('#p4').css('background-color', '#baffff');
    $('#p2').css('background-color', 'red');

    //Alteração dos elementos da lista:

    //Alteração de testes com seletores
    $('.first').click(function() {
        $('.first').css('background-color', 'red');
    })

    //Alteração de conteudo
    $('#t2').click(function() {
        $('#t2').html('Novo conteúdo')
    })

    //Alteração de formatação
    $('#t3').click(function() {
        $('#t3').css('font-style', 'italic')
    })
});