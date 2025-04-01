$(document).ready(function () {
  // Add cursor pointer to selectable cells
  $('td:not(:first-child):not(:contains("Not Available"))').css(
    "cursor",
    "pointer"
  );

  // Handle cell click events
  $('td:not(:first-child):not(:contains("Not Available"))').click(function () {
    $(this).toggleClass("selected");
  });
});
