const Mood= require('./models/Mood.js')

createMood = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a mood',
        })
    }

    const mood = new Mood(body)

    if (!mood) {
        return res.status(400).json({ success: false, error: err })
    }

    mood
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: mood._id,
                message: 'Mood created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Mood not created!',
            })
        })
}

updateMood = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Mood.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        mood.name = body.name
        mood.expression = body.expression
      
        mood
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Mood updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Mood not updated!',
                })
            })
    })
}

deleteMood = async (req, res) => {
    await Mood.findOneAndDelete({ _id: req.params.id }, (err, mood) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!mood) {
            return res
                .status(404)
                .json({ success: false, error: `mood not found` })
        }

        return res.status(200).json({ success: true, data: mood })
    }).catch(err => console.log(err))
}

getMoconst Movie = require('../models/movie-model')

createMovie = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const movie = new Movie(body)

    if (!movie) {
        return res.status(400).json({ success: false, error: err })
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
}

updateMovie = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        movie.name = body.name
        movie.time = body.time
        movie.rating = body.rating
        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Movie updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Movie not updated!',
                })
            })
    })
}

deleteMovie = async (req, res) => {
    await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getMoodById = async (req, res) => {
    await Mood.findOne({ _id: req.params.id }, (err, mood) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: mood })
    }).catch(err => console.log(err))
}

getMoods = async (req, res) => {
    await Mood.find({}, (err, moods) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!moods.length) {
            return res
                .status(404)
                .json({ success: false, error: `Mood not found` })
        }
        return res.status(200).json({ success: true, data: moods })
    }).catch(err => console.log(err))
}

module.exports = {
    createMood,
    updateMood,
    deleteMood,
    getMoods,
    getMoodById,
}ById = async (req, res) => {
    await Mood.findOne({ _id: req.params.id }, (err, mood) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: mood })
    }).catch(err => console.log(err))
}

getMoods = async (req, res) => {
    await Mood.find({}, (err, moods) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!moods.length) {
            return res
                .status(404)
                .json({ success: false, error: `Mood not found` })
        }
        return res.status(200).json({ success: true, data: moods })
    }).catch(err => console.log(err))
}

module.exports = {
    createMood,
    updateMood,
    deleteMood,
    getMoods,
    getMoodById,
}