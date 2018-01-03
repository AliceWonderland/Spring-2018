const router = require('express').Router();
const db = require('../db');
const models=require('../db/models');
const Students=models.Student;
const Campuses=models.Campus;
const Portfolios=models.Portfolio;

// router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/

//api root
router.get('/', function (req, res, next) {
    res.send('api root');
});

// /api/puppies
router.get('/puppies', function (req, res, next) {
  res.send('puppies');
});

// /api/campuses
router.get('/campuses', function (req, res, next) {
    Campuses.findAll({})
    .then(campuses => res.json(campuses))
    .catch(next);
});

// /api/students
router.get('/students', function (req, res, next) {
    Students.findAll({})
    .then(students => res.json(students))
    .catch(next);
});

// /api/portfolio
router.get('/portfolio', function (req, res, next) {
    Portfolios.findAll({})
    .then(portoflios => res.json(portoflios))
    .catch(next);
});

// matches POST requests to /api/puppies/
router.post('/', function (req, res, next) { /* etc */});

// matches PUT requests to /api/puppies/:puppyId
router.put('/:puppyId', function (req, res, next) { /* etc */});

// matches DELETE requests to /api/puppies/:puppyId
router.delete('/:puppyId', function (req, res, next) { /* etc */});

// handles 404s
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});

module.exports = router;