// business logic


// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var numberAbs = Math.abs(number);
    var numberArray = []
    for (var index = 1; index <= numberAbs; index += 1) {
  //    numberArray.push(index);
      if (index % 15 == 0) {
        numberArray.push("pingpong")
//       $(".result").text("ping")
      } else if (index % 5 == 0) {
        numberArray.push("pong")
//       $(".result").text("pong")
      } else if (index % 3 == 0) {
//       $(".result").text("pingpong")
        numberArray.push("ping")
      } else {
//      $(".result").text(index)
        numberArray.push(index)
      }
    }
    $(".result").text(numberArray);
    $("#result").show();
  });
});
