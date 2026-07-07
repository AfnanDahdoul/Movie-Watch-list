const movieWatchListForm = document.forms['MovieWatchList'];
let movies = [];

if (localStorage.getItem("movies") != null){
    movies = JSON.parse(localStorage.getItem("movies"));
}
movieWatchListForm.onsubmit = (e) => {
    e.preventDefault();

    if (rating < 1 || rating > 10) {
        alert("Rating must be between 1 and 10");
        return;
    }

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
    const result = movies.map( (movie,index) => {
        return `<div class="card" style="width: 18rem;">
                    <img src="./assets/imgs/movie.png" class="card-img-top" alt="movie placeholder">
                    <div class="card-body">
                        <span>${index}</span>
                        <h5 class="card-title">${movie.name}</h5>
                        <p class="card-text">${movie.genere}</p>
                        <span class="p-3 mb-2 bg-info text-dark">${movie.rating}</span>
                        <button class="btn btn-danger" onclick=removeMovie(${index}) >delete</button>
                    </div>
                </div>`;
    }).join('');
    document.querySelector(".cards").innerHTML = result;
}

dispalyMovies();

const removeMovie = (index) =>{
    movies.splice(index,1);
    localStorage.setItem("movies", JSON.stringify(movies));
    dispalyMovies();
}