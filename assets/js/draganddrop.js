var draggableConfig = {
  connectToSortable: ".player",
  helper:"clone",
  axis: "x",
};

var sortableConfig = {
  placeholder: "AAAA",
  update: function( event, ui ) {
    $( ".success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
  }
};

var droppableConfig = {
  drop: function(event, ui) {
    $(ui.draggable).remove();
  }
};

$(".kama-img").draggable(draggableConfig);
$( ".player" ).sortable(sortableConfig);
$( "#apagar" ).droppable(droppableConfig);