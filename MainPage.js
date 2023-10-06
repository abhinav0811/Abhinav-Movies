let API = '16d5eeae';
let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener('click', () => {
    const trim = input.value.trim();
    if (trim !== '') {
        FetchMovies(trim);
    }
});

async function FetchMovies(searchTerm) {
    try {
        const movieAPI = await fetch(`https://www.omdbapi.com/?apikey=${API}&s=${searchTerm}`);
        const response = await movieAPI.json();

        if (response.Response === 'True') {
            ShowMovies(response.Search);
        } else {
            ul.innerHTML = "Movies not found.";
        }
    } catch (error) {
        ul.innerHTML = "Error fetching data.";
    }
}

function ShowMovies(movies) {
    ul.innerHTML = ''; 
    movies.forEach(movie => {
        ul.innerHTML += `
            <li>
                <h2>${movie.Title}</h2>
                <img src="${movie.Poster}">
                <p>${movie.Year}</p>
                <p>${movie.Type}</p>
                <br><br><br>
                <hr>
            </li>
        `;
    });
}
