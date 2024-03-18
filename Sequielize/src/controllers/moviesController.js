const db = require('../database/models')
const { Op } = require('sequelize')

const controller = {
    list: (req, res) => {
        db.Movie.findAll(/*{
            where: {
                'title': {
                    [Op.like]: 'toy story%'
                }
            }
        }*/)
        .then((movies) => {
            res.render('moviesList', { movies: movies });
        })
        .catch( ( err ) => {
            res.json(err)
        })
        
    },
    detail: (req ,res) => {
        db.Movie.findByPk(req.params.id)
            .then( (movie) => { res.render('moviesDetail' ,  { movie })})
            .catch((err) => res.json(err));
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [ ['release_date', 'DESC'] ],
            limit: 5,
            offset: 5
        })
        .then( (resp) => res.render('newestMovies', {movies : resp }) )
        .catch((err) => res.json(err));
    },
    recomended: (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {
                    [Op.gt] : 6
                }
            },
            order: [['rating','DESC']],
            limit : 5
        })
        .then( (resp) => res.render('recommendedMovies', {movies:resp}) )
    }
     
}

module.exports = controller;