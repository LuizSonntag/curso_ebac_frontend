$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault()

        const NovaTarefa = $('#CriarTarefa').val();
        const NovoItem = $(`<li>${NovaTarefa}</li>`);

        $(NovaTarefa).appendTo(NovoItem);
        $(NovoItem).appendTo('ul');

        $('#CriarTarefa').val('');
    })

    $(document).on('click','li', function() {
        $(this).toggleClass('concluida');
    })
})
