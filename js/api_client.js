var printStargazers = function(users) {
  $.each(users, function(index, user) {
    console.log(user.login + ' starred the Rails Repository');
    $('#search_results').append(user.login + ' starred the Rails Repository <br>');
  });
};

function bindCreateButton() {
  $('#convert').on('click', function() {
    $.ajax({
        url: 'https://api.github.com/repos/rails/rails/stargazers',
        type: 'GET',
      }).done(function(users) {
        printStargazers(users);
      });
  });
}
