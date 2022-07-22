// antes de usar axios se agergo en el HTML su script: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//Migracion a Axios: automaticamente te genera el json
// se puede usar para quedarte con cualquier dato de la api (data, status)
// hace un codigo legible para los programadores
// simplifica el uso del fetch y json
const api_axio=axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    },
    params:{
        'api_key':API_KEY,
    },
});
// Llamados a la API

async function getTrendingMoviesPreview() {
    //tomo las peliculas trending del dia.
    //trending/movie/day
    
    const {data}= await api_axio('trending/movie/day'); 
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
    const {data}= await api_axio('genre/movie/list'); 
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