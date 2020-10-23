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
    subsName: $("#subs_name").val().trim(),
    dueDate: $("#subs_date").val(),
    subsCost: $("#subs_cost").val(),
    trialPeriod: $("#trial_period").val().trim()
  };

  $.post("/api/add", newSubscription)
    .then(function(data) {
      console.log("add.html", data);
      alert("adding subcription...");
    });
});

