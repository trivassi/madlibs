$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personInput = $("input#person").val();
    var petInput = $("input#pet").val();
    var foodInput = $("input#food").val();
    var verbInput = $("input#verb").val();
    var placeInput = $("input#place").val();

    $(".person").text(personInput);
    $(".pet").text(petInput);
    $(".food").text(foodInput);
    $(".verb").text(verbInput);
    $(".place").text(placeInput);

    $("#story").show();

    event.preventDefault();

  });
});
