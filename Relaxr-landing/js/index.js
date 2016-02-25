$( document ).ready(function() {
  // Handler for .ready() called.

  $( ".readmore" ).on('click',function(event) {
    event.preventDefault();
    $('.readless.hide').show();
    $('.readmore').hide();
    $( "#show-this-on-click" ).slideDown( "slow", function() {
      // Animation complete.
    });
  });

  $( ".readless" ).on('click',function(event) {
    event.preventDefault();
    $('.readless').hide();
    $('.readmore').show();
    $( "#show-this-on-click" ).slideUp( "slow", function() {
      // Animation complete.
    });
  });

  $( ".learnmore" ).on('click',function(event) {
    event.preventDefault();
    $('.learnmore').hide();
    $( "#learnmoretext" ).slideDown( "slow", function() {
      // Animation complete.
    });
  });

});
