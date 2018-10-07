// business logic


// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var numberAbs = Math.abs(number);
    var numberArray = []
    for (var index = 1; index <= numberAbs; index += 1) {

      if (index % 15 == 0) {
        numberArray.push("pingpong")
      } else if (index % 5 == 0) {
        numberArray.push("pong")
      } else if (index % 3 == 0) {
        numberArray.push("ping")
      } else {
        numberArray.push(index)
      }
    }

    $(".result").text(numberArray);
    $("#result").show();
  });
});
