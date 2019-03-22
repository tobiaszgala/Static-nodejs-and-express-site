const express = require('express');
// load data file with project information
const { projects } = require('../data.json');
const router = express.Router();

// render main page
router.get('/', (req, res) => {
    res.render('index', {
        heading: 'Hi, my name is Tobiasz!',
        description: 'The secret of getting ahead is getting started - Mark Twain',
        projects
    });
});

module.exports = router;