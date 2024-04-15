function loadPage(path, domId) {
    $('#' + domId).hide()
    $.ajax({
        url: 'pages/' + path + '.html'
    }).done(function(response) {
        $('#' + domId).html(response);
        $('#' + domId).show();
    })
}

$(document).ready(function() {
    loadPage('home', 'container'); 
    
    $('a.nav-link').on('click', function(event){
        if($(this).attr('data-page') != undefined) {
            loadPage($(this).attr('data-page'), 'container');
            event.preventDefault();
        }
        
    });

    $('#form_contato').on('submit', function(event) {
        alert('Mensagem enviada!');
        $('#form_contato input').val('');
        $('#form_contato textarea').val('');
        event.preventDefault();
    });
    
});

