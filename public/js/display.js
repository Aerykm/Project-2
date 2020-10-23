$(document).ready(() => {

  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  
});

$.get("/api/display", function(data) {
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "subscription-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our book data to the well we just placed on the page
    $("#subscription-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].subsName + "</h2>");
    $("#subscription-well-" + i).append("<h3>Subscription Cost: " + data[i].subsCost + "$"+"</h4>");
    $("#subscription-well-" + i).append("<h3>Payment Date: " + data[i].dueDate + "</h4>");
  }
});