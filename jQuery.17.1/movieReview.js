const moviesList = []; //Declare variable. Name it movieList. Store empty array for list of all movies in memory







/* createMovieDataHTML accepts an object with title and rating keys and returns a string of HTML */

function createMovieDataHTML(data) {  //Declare function to create/return new HTML. 
  return `
    <tr>
      <td>${data.title}</td>                                   //This isn't jQuery silly! It's a template literal
      <td>${data.rating}</td>
      <td>
        <button class="btn btn-danger" data-delete-id=${data.currentId}>
          Delete
        </button>
      </td>
    <tr>
  `;
}








/* accepts an array of objects and a key and sorts by that key */

function sortBy(array, keyToSortBy, direction) {
  return array.sort(function(a, b) {
    // since rating is a number, we have to convert these strings to numbers
    if (keyToSortBy === "rating") {
      a[keyToSortBy] = +a[keyToSortBy];
      b[keyToSortBy] = +b[keyToSortBy];
    }
    if (a[keyToSortBy] > b[keyToSortBy]) {
      return direction === "up" ? 1 : -1;
    } else if (b[keyToSortBy] > a[keyToSortBy]) {
      return direction === "up" ? -1 : 1;
    }
    return 0;
  });
}









$(function() {      //Create a function in jQuery with an event listener that listens for submit and then prevents browswer default behavior when event is heard

  //Eventhandler   //Event listener     //Action
  $("#new-movie-form").on("submit", function(evt) {  
    evt.preventDefault();   //Event(submit)

    let title = $("#title").val();     //Declare variable. Name it title. .val() will return the value of the text input (what is written in the textbox) of rating id 
    let rating = $("#rating").val();   //.val() will return the value of the text input (what is written in the textbox) of rating id
    let currentId = 0         //...st
    
    //??????????////WHY DOES THIS DATA HAVE TO BE STORED IN AN ARRAY? 
    let movieData = { title, rating, currentId }; 
    const HTMLtoAppend = createMovieDataHTML(movieData); 

    currentId++
    moviesList.push(movieData);

    $("#movie-table-body").append(HTMLtoAppend);
    $("#new-movie-form").trigger("reset");
  });

  // when the delete button is clicked, remove the closest parent tr and remove from the array of movies

  $("tbody").on("click", ".btn.btn-danger", function(evt) {
    // find the index where this movie is
    let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))
    
    // remove it from the array of movies
    moviesList.splice(indexToRemoveAt, 1)

    // remove it from the DOM
    $(evt.target)
      .closest("tr")
      .remove();
    
  });

  // when an arrow is clicked, 
  $(".fas").on("click", function(evt) {
    
    // figure out what direction we are sorting and the key to sort by
    let direction = $(evt.target).hasClass("fa-sort-down") ? "down" : "up";
    let keyToSortBy = $(evt.target).attr("id");
    let sortedMovies = sortBy(moviesList, keyToSortBy, direction);
    
    // empty the table
    $("#movie-table-body").empty();

    // loop over our object of sortedMovies and append a new row
    for (let movie of sortedMovies) {
      const HTMLtoAppend = createMovieDataHTML(movie);
      $("#movie-table-body").append(HTMLtoAppend);
    }

    // toggle the arrow
    // $(evt.target).toggleClass("fa-sort-down");
    // $(evt.target).toggleClass("fa-sort-up");
  });
});



