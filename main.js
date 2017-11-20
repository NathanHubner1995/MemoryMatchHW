$(document).ready( function() {




  $("#shuffle").click(function() {
    $(".card-image").hide();
    $("#gameboard").shuffleChildren();
  });
  $( "#gameboard" ).on( "click", ".game-card", function() {
    $(this).children().show()
  });


  $.fn.shuffleChildren = function() {
    $.each(this.get(), function(index, el) {
        var $el = $(el);
        var $find = $el.children();

        $find.sort(function() {
            return 0.5 - Math.random();
        });

        $el.empty();
        $find.appendTo($el);
    });
  };



});
