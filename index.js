$(document).ready(function () {
  $("#run-button").click(function () {
    $("#Content").empty(); // Clear any previous content
    $("#Content").append("<div>Hello World</div>"); // Print "Hello World"
  });
});
