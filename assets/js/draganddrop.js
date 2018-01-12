var draggableConfig = {
  connectToSortable: ".player",
  helper:"clone",
  axis: "x",
};

var sortableConfig = {
  activate: function( event, ui ) {
    $( ".player" ).addClass("ui-player-state-ativado");
    $(".legenda-player").show();
  },
  deactivate: function( event, ui ) {
    $( ".player" ).removeClass("ui-player-state-ativado");
    $(".legenda-player").hide();
  },
  update: function( event, ui ) {
    $( ".success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
  }
};

var droppableConfig = {
  over: function(event, ui) {
    $(".legenda-rd").show();
  },
  deactivate: function(event, ui) {
    $(".legenda-rd").hide();
  },  
  drop: function(event, ui) {
    $(".legenda-rd").hide();
    $(ui.draggable).remove();
  },
  classes: {
    "ui-droppable-active": "ui-rd-state-ativado",
  },
};

$(".kama-img").draggable(draggableConfig);
$( ".player" ).sortable(sortableConfig);
$( ".apagar" ).droppable(droppableConfig);