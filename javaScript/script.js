$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#enviar').on('click', function() {
    const nome = $('#nome').val().trim()
    const email = $('#email').val().trim()
    const telefone = $('#telefone').val().trim()

    if (nome && email && telefone) {
        alert('Mensagem enviada, em breve entraremos em contato!')
    } else {
        alert('Por favor preencha os campos obrigatório para continuar!')
    }
})