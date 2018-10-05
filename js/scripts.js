// business logic


// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    debugger
    var number = parseInt($("input#number").val());
    var numberAbs = Math.abs(number);
    var numberArray = []
    for (var index = 1; index <= numberAbs; index += 1) {
      numberArray.push(index);
    }

    if (numberAbs % 3 == 0) {
      $(".result").text("ping")
    } else if (numberAbs % 5 == 0) {
      $(".result").text("pong")
    } else if (numberAbs % 15 == 0){
      $(".result").text("pingpong")
    } else {
      $(".result").text(numberAbs)
    }

    $("#result").show();
  });
});
