//Meetup API

//var meetKey = 4a1e561d7323254a5232128494a5934;



//var authKey = "key=4a1e561d7323254a5232128494a5934&";

$('#searchMeetups').on('click', function(){

  var queryURL = "https://api.meetup.com/find/groups?key=4a1e561d7323254a5232128494a5934&sign=true&photo-host=public&location=Orlando, FL&text=pets&category=26&page=20";


  $.ajax({
    url: queryURL, 
    method: 'GET'
  })
    .done(function(response) {
      console.log("done");
      var meetup = response;

      console.log(response[0].name);

      for(var i=0; i < meetup.length; i++){
          
          var name = meetup[i].name;
          var description = meetup[i].description;
          var link = meetup[i].link;
          

          $("#list").append('<h5>Name: ' + name + "</h5>");
          $("#list").append('<h5>Description: ' + description + "</h5>");
          $("#list").append("<a href='" + link + "'>" + link + "</a>");


      };

   });
  return false;


// $('#list').empty();

//     numResults = $('#numRecordsSelect').val();

//     runQuery(numResults, queryURL);

//      return false;

    // This button clears the top articles section
// $('#clearAll').on('click', function(){

//   $("#list").empty();
//     })
})






