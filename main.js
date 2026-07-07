const movieWatchListForm = document.forms['MovieWatchList'];
let movies = [];

if (localStorage.getItem("movies") != null){
    movies = JSON.parse(localStorage.getItem("movies"));
}
movieWatchListForm.onsubmit = (e) => {
    e.preventDefault();

    const movie = {
        name: movieWatchListForm.name.value,
        genere: movieWatchListForm.genere.value,
        rating: movieWatchListForm.rating.value
    };

    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
    dispalyMovies();
}

const dispalyMovies = () =>{
    const result = movies.map( (movie) => {
        return `<div class="card" style="width: 18rem;">
                    <img src="./assets/imgs/movie.png" class="card-img-top" alt="movie placeholder">
                    <div class="card-body">
                        <h5 class="card-title">${movie.name}</h5>
                        <p class="card-text">${movie.genere}</p>
                        <span href="#" class="btn btn-primary">${movie.rating}</span>
                    </div>
                </div>`;
    })
    document.querySelector(".card").innerHTML = result;
}

dispalyMovies();