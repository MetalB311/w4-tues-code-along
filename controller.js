const movies = require('./db.json')

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const deleteId = req.params.id
        let index = movies.findIndex(element => element.id === +deleteId)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        // const {title, rating, imageURL} = req.body   //destructured line 15-17
        const title = req.body.title
        const rating = req.body.rating
        const imageURL = req.body.rating

        //this code finds me the next, non-used id in my database
        let greatestId = -1
        for (let i = 0; i<movies.length; i++) {
            if(movies[i].id > greatestId) {
                greatestId = movies[i].id
            }
        }

        let nextId = greatestId + 1
        
        let newMovie = {
            id: nextId,
            title,
            rating,
            imageURL
        }

        movies.push(newMovie)
        // console.log(movies)
        res.status(200).send(movies)
    }
}