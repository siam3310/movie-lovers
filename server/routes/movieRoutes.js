
const movieController = require("../controllers/movieController")
const {admin} = require("../middlewares")

function a(v, next){
    console.log(v);
    next()
}

module.exports = (router)=>{

    router.post('/api/movies',  movieController.getMovies)
    router.get('/api/movie/:id',  movieController.getMovie)

    router.get('/api/movie-details/:id',  movieController.getMovieDetails)
    
    router.get('/api/home-section-movies',  movieController.getMoviesForHomeSection)

    router.get('/api/series-movies',  movieController.getSeriesMovies)

    router.post('/api/add-movie', admin, movieController.addMovie)
    router.post('/api/update-movie', admin, movieController.updateMovie
    )
    router.get('/api/total-movie', movieController.calcTotalMovie)


    router.post('/api/search-movie', movieController.searchMovie)

}
