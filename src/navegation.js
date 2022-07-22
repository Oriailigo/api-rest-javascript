//Codigo que trabaja con location y hash
window.addEventListener('DOMContentloaded',navigator,false)
window.addEventListener('hashchange',navigator,false)

function navigator(){
    console.log({location});

    if(location.hash.startsWith('#trends')){
        trendPage()
    }else if(location.hash.startsWith('#search=')){
        searchPage()
    }
    else if(location.hash.startsWith('#movie=')){
        movieDetailsPage()
    }
    else if(location.hash.startsWith('#category=')){
        categoryPage()
    }else{
        homePage()
    }

}

function homePage(){
    console.log("HOME!!");
    getTrendingMoviesPreview();
    getCategories();
}
function trendPage(){
    console.log("trend!!");
}
function searchPage(){
    console.log("search!!");
}
function movieDetailsPage(){
    console.log("movie!!");
}
function categoryPage(){
    console.log("category!!");
}