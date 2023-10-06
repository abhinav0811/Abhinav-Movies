let API = '16d5eeae';
let input = document.querySelector("input");
let button = document.querySelector("button");
let div = document.querySelector("div");


// Click Button for Fetch Movie
button.addEventListener('click',()=>
{
    const trim = input.value.trim();
    if(trim !== '')
    {
        FetchMovie(trim);
    }
})


// Fetching Movie 
async function FetchMovie(movie)
{
    try{
        const movieAPI = await fetch(`https://www.omdbapi.com/?apikey=${API}&t=${movie}`);
        const data = await movieAPI.json();

        if(data.Response === 'True')
        {
            ShowMovie(data);
        }
        else
        {
            div.innerHTML="Movie not Found";
        }
    }
    catch(error)
    {
        div.innerHTML="Not a Proper API";
    }
}




// Display Moive Details
function ShowMovie(data)
{
    div.innerHTML=`
    <h2>${data.Title}</h2>
    <img src=${data.Poster}>
    <p>${data.Year}</p>
    <p>${data.Plot}</p>
    <p>${data.Director}</p>
    `
}