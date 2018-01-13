var draggableConfig = {
  connectToSortable: ".player-sortable",
  helper:"clone",
  axis: "x",
};

var sortableConfig = {
  activate: function( event, ui ) {
    $( ".player" ).addClass("ui-player-state-ativado");
    $( ".legenda-player" ).show();
  },
  deactivate: function( event, ui ) {
    $( ".player" ).removeClass("ui-player-state-ativado");
    $(".legenda-player" ).hide();
    $( ".tutorial").remove();
  },
  receive: function( event, ui ) {
    $( ".kama-add" ).fadeIn( 400 ).delay( 400 ).fadeOut( 400 );
  }
};

var droppableConfig = {
  activate: function(event, ui) {
    $( ".legenda-rd" ).show();
  },
  deactivate: function(event, ui) {
    $( ".legenda-rd" ).hide();
  },  
  drop: function(event, ui) {
    $( ".legenda-rd" ).hide();
    $(ui.draggable).remove();
    $( ".kama-rem" ).fadeIn( 400 ).delay( 400 ).fadeOut( 400 );
  },
  classes: {
    "ui-droppable-active": "ui-rd-state-ativado",
  },
};

$( ".kama-img" ).draggable(draggableConfig);
$( ".player-sortable" ).sortable(sortableConfig);
$( ".apagar" ).droppable(droppableConfig);