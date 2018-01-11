$( ".filtro" ).on('click', function( e ) {

    e.preventDefault();
    
    var target = $(e.target).text();
    
    $('div.projeto:not(:contains("' + target + '"))').closest( "div.projeto" ).hide();
    $('div.projeto:contains("' + target + '")').closest( "div.projeto" ).show();
});