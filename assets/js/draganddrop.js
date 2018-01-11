$( function() {
    
    $( "#apagar" ).droppable({
        drop: function( event, ui ) {
          $( this )
            .find( "p" )
              .html( "Dropped!" );
        }
      });
      $( ".kama-div" ).draggable({containment: "parent"});
});