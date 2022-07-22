// Llamados a la API

async function getTrendingMoviesPreview() {
    //tomo las peliculas trending del dia.
    const url_API= 'https://api.themoviedb.org/3/trending/movie/day?api_key='+ API_KEY;
    const res= await fetch(url_API)
    const data= await res.json();   
    const movies=data.results;
    console.log({data,movies}) 
    movies.forEach(movie => {
        // crear tag html y agregar clase
        const trandingPreviewMoviesContainer= document.
        querySelector('#trendingPreview .trendingPreview-movieList')
       
        const movieContainer= document.createElement('div');
        movieContainer.classList.add('movie-container');
        const movieImg= document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.alt="Nombre de la película";
        movieImg.src='https://image.tmdb.org/t/p/w300/'+movie.poster_path; 
        movieContainer.appendChild(movieImg);
        trandingPreviewMoviesContainer.appendChild(movieContainer);
    });
}

// lista de peliculas filtrada por categorias:
async function getCategories() {
    //tomo las categorias de las peliculas.
    ///genre/movie/list
    const url_API= 'https://api.themoviedb.org/3/genre/movie/list?api_key='+ API_KEY;
    const res= await fetch(url_API)
    const data= await res.json();   
    const categories=data.genres;
    console.log({data,categories}) 
    categories.forEach(categories => {
        // crear tag html y agregar clase
        const categoriessContainer= document.
        querySelector('#categoriesPreview .categoriesPreview-list')
       
        const categorycontainer= document.createElement('div');
        categorycontainer.classList.add('category-container');
        const categoriesH3= document.createElement('h3');
        categoriesH3.classList.add('category-title');
        categoriesH3.id='id'+categories.id;
        categoriesH3.textContent=categories.name;
        categorycontainer.appendChild(categoriesH3);
        categoriessContainer.appendChild(categorycontainer);
    });
}
getTrendingMoviesPreview();

getCategories();