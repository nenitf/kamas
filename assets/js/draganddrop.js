$( function() {
  
  $( "#apagar" ).droppable({
    drop: function(event, ui) {
      $(ui.draggable)
      .remove();
    }
  });
  
  $( ".kama-img" ).draggable();
});
/*
$( ".kama-img").click(function() {
  $( this ).clone().prependTo( ".kama-div" );
});
*/