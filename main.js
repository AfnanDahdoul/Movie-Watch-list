const movieWatchListForm = document.forms['MovieWatchList'];
const movies = [];
movieWatchListForm.onsubmit = (e) => {
    e.preventDefault();

    const movie = {
        name: movieWatchListForm.name.value,
        genere: movieWatchListForm.genere.value,
        rating: movieWatchListForm.rating.value
    };

    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
}
