// Run jQuery
$(document).ready(function() {
  // When submit button is clicked
  $("#search").click(function() {
    // Get out search input
    var searchBar=$("#searchBar").val();
    // API url with search term
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchBar + "&format=json&callback=?";

    // Get our info from search
    $.ajax ({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success: function(data) {
        // Clear the ouput when we search
        $("#output").html("");
        // Loop through api data and display search results as a list
        for(var i=0; i<5; i++) {
          $("#output").prepend("<li><a href= " + data[3][i]+">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
        }
       $("#searchBar").val("");
      },
      error: function(errorMessage) {
        alert("Error");
      }
    });

  });
  // Allow enter key for submit
  $("#searchBar").keypress(function(key) {
      if(key.which==13) {
        $("#search").click();
      }
    });
});
