// console.log('js is sourced');

var results='';

$(document).ready(function () {
  // console.log('in ready');

  $('#searchMe').on('click', function () {
    // console.log('I clicked the button');
    var movieInput = $('#movieIn').val();
    // console.log(movieInput);
    var searchURL = 'http://www.omdbapi.com/?s=' + movieInput;
    // console.log(searchURL);
    $.ajax({
      url: searchURL,
      dataType: 'JSON',
      success: function (data) {
        // console.log(data.Search);

        displayMovies(data);
        clearField();

      },//end success
    });//end ajax
  });//end button click
});//end ready

var displayMovies = function (data) {
  // console.log('in displayMovies');
  console.log(data.Search);
  $('#results').empty();

  for (var i = 0; i < data.Search.length; i++) {
  results += '<h2>' + data.Search[i].Title + '</h1><p>' + data.Search[i].Year + '</p><p><img src="' + data.Search[i].Poster
  + '"></p>';
  }
$('#results').html(results);
};//end displayMovies

var clearField = function () {
  $('#movieIn').val('');
};
