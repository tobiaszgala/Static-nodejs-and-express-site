const express = require('express');
// load data file with project information
const { projects } = require('../data.json');
const router = express.Router();

// redirect if no id provided
router.get('/', (req, res) => {
    res.redirect('../');
});

// select id 
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    const project = projects[id];
    // if project exists render project if not create error object
    if (project) {
        res.render('project', project);
    } else {
        const error = new Error(`Couldn't find a project with provided id`);
        error.status = 404;
        next(error);
    }
});

module.exports = router;