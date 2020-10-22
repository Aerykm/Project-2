$(document).ready(() => {
<<<<<<< HEAD
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  
  

});


  
=======
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(data => {
      $(".member-name").text(data.email);
    });
});

>>>>>>> 14295ecf9ce5cf564f6a3f3555fabbd496509a7c
