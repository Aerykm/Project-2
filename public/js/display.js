$(document).ready(() => {

  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  
});

$.get("/api/display", function(data) {

  for (var i = 0; i < data.length; i++) {

    var wellSection = $("<div>");
   
    wellSection.addClass("well");
  
    wellSection.attr("id", "subscription-well-" + i);
   
    $("#well-section").append(wellSection);


    $("#subscription-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].subsName + "</h2>");
    $("#subscription-well-" + i).append("<h3>Subscription Cost: " + data[i].subsCost + "$"+"</h4>");
    $("#subscription-well-" + i).append("<h3>Payment Date: " + data[i].dueDate + "</h4>");
    $("#subscription-well-" + i).append("<button class='delete' data-id='" + data[i].id + "'>DELETE SUBSCRIPTION</button>")
    $("#subscription-well-" + i).append("<button class='update' data-id='" + data[i].id + "'>UPDATE SUBSCRIPTION</button>")
  }
  
  $(".delete").click(function() {

    $.ajax({
      method: "DELETE",
      url: "/api/display/" + $(this).attr("data-id")
    })
      // On success, run the following code
      .then(function() {
        console.log("Deleted Successfully!");
      });

    $(this).closest("div").remove();

  });

  var $newItemInput = $("input.new-item");
  var $subContainer = $(".sub-container");
  $(document).on("click", ".todo-item", editTodo);

  var subs = [];
  getSubs();
  function initializeRows() {
    $subContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < subs.length; i++) {
      rowsToAdd.push(createNewRow(subs[i]));
    }
    $subsContainer.prepend(rowsToAdd);
  }
  function getSubs() {
    $.get("/api/display", function(data) {
      subs = data;
      initializeRows();
    });
  }
  function editSub() {
    var currentSubs = $(this).data("subs");
    $(this).children().hide();
    $(this).children("input.edit").val(currentSubs.text);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
  }
  function updateSubs(subs) {
    $.ajax({
      method: "PUT",
      url: "/api/display",
      data: subs
    }).then(getSubs);
  }
});