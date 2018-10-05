// business logic


// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());

    if (number % 3) {
      $(".result").text("ping")
    } else if (number % 5) {
      $(".result").text("pong")
    } else {
      $(".result").text("pingpong")
    }
    
    $("#result").show();
  });
});
