var draggableConfig = {
  connectToSortable: ".player",
  helper:"clone",
  axis: "x",
};

var sortableConfig = {
  placeholder: "sortable-placeholder",
};

var droppableConfig = {
  drop: function(event, ui) {
    $(ui.draggable).remove();
  }
};

$(".kama-img").draggable(draggableConfig);
$( ".player" ).sortable(sortableConfig);
$( "#apagar" ).droppable(droppableConfig);