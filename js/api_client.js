// This function will print an array of users to the console
let printStargazers = function(users) {
  $.each(users, function(index, user) {
    console.log(user.login + ' starred the Rails Repository');
  });
};

// makes a request to the GitHub API for all users that starred the RoR repo
// The callback calls printStargazers
$.ajax({
  url: 'https://api.github.com/repos/rails/rails/stargazers',
  type: 'GET',
}).done(function(users) {
  printStargazers(users);
});

// POST REQUEST
let addHTML = function (html) {
  $('#search_results').html(html);
};

// Here we are sending markdown to the GitHub API to render into HTML.
// Once we get a response it adds the HTML to <div id="search_results">
let bindCreateButton = function (){
  $('#convert').on('click', function(event) {
    let markdown = $('#markdown').val();
    $.ajax({
      url: 'https://api.github.com/markdown',
      type: 'POST',
      data: JSON.stringify({ text: markdown, mode: 'markdown' })
    }).done(function(response) {
      addHTML(response);
    });
  });
};

$(document).ready(() => bindCreateButton());
