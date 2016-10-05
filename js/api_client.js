// /// EXAMPLE #1
// var url = 'https://api.spotify.com/v1/tracks/1zHlj4dQ8ZAtrayhuDDmkY';
// var success_callback = function (songFromAPIRequest){
//   // The response has already been parsed for us.
//   alert("Song Name: " + songFromAPIRequest.name);
// };
//
// $.getJSON(url, success_callback);
//
// /// EXAMPLE #2
// var url = 'https://api.spotify.com/v1/search';
//
// // These parameters will be made into url parameters by jQuery
// var url_params = {
//   q: "Take Me to Church",
//   type: "track",
//   limit: 10
// };
//
// var success_callback = function (searchResultsFromAPIRequest){
//   var tracks = searchResultsFromAPIRequest.tracks.items;
//   $.each(tracks, function(index, track) {
//     console.log("Song Found: " + track.name);
//   });
// };
//
// // The second parameter we are passing is the url parameters to use in the request
// $.getJSON(url, url_params, success_callback);
//
// /// EXAMPLE #3
// // Here we manually create a url with all the url parameters
// var url = 'https://api.spotify.com/v1/search?q=Take+Me+to+Church&type=track&limit=10';
//
// var success_callback = function (searchResultsFromAPIRequest){
//   var tracks = searchResultsFromAPIRequest.tracks.items;
//   $.each(tracks, function(index, track) {
//     console.log("Song Found: " + track.name);
//   });
// };
//
// // No url parameters being passed since we already included them in the url
// $.getJSON(url, success_callback);

var printStargazers = function(users) {
  $.each(users, function(index, user) {
    console.log(user.login + ' starred the Rails Repository');
  });
};

$.ajax({
    url: 'https://api.github.com/repos/rails/rails/stargazers',
    type: 'GET',
  }).done(function(users) {
    printStargazers(users);
  });

  var addHTML = function (html){
    $('#search_results').html(html);
  };

  var bindCreateButton = function (){
    $('#convert').click(function(event) {
      var markdown = $('#markdown').val();
      $.ajax({
        url: 'https://api.github.com/markdown',
        type: 'POST',
        data: JSON.stringify({ text: markdown, mode: "markdown" })
      }).done(function(response) {
        addHTML(response);
      });
    });
  };
