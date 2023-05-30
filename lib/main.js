$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12) 12345-1234'
    })


    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            telefone: {
                minlength: 15
            },
            email: {
                required: true,
                email: true
            },
            textarea: {
                required:true
            }
        },
        messages: {
            nome: {
                required: 'Por favor, digite seu nome',
            },
            email: {
                required: 'Por favor, digite seu e-mail',
                email: 'Por favor, digite uma forma de e-mail valida'
            },
            telefone: {
                required: 'Por favor, insira o seu telefone',
                minlength: jQuery.validator.format("Por favor, digite o número do telefone completo")
            },
            textarea: {
            required: 'Por favor, digite a mensagem'
            },
        }
    })
})