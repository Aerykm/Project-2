$(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(data => {
      $(".member-name").text(data.email);
    });
 
});
  
$("#add-subs").on("click", function(event) {
  event.preventDefault();
  var newSubscription = {
    subscriptionName: $("#subs_name").val().trim(),
    subscriptionDate: $("#subs_date").val().trim(),
    subscriptionCost: $("#subs_cost").val().trim(),
    trialorSubscription: $("#trial_period").val().trim()
  };

  $.post("/add", newSubscription)
    .then(function(data) {
      console.log("add.html", data);
      alert("adding subcription...");
    });
});