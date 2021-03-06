const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ id: req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    remove: function (req, res) {
        db.User
            .findById({ id: req.params.id })
            .then(data => data.remove(id))
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}