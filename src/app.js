// native
const path = require('path');
// npm
const express = require('express');
// routes
const mainRoute = require('./routes/index');
const projectsRoute = require('./routes/projects');
const aboutRoute = require('./routes/about');
// deployment settings
const publicDirectory = path.join(__dirname, '../public');
const viewDirectory = path.join(__dirname, '../templates');
const port = process.env.PORT || 3000;

// express
const app = express();
// express settings
app.set('view engine', 'pug');
app.set('views', viewDirectory);
app.use('/static', express.static(publicDirectory));
// route settings
app.use(mainRoute);
app.use('/projects', projectsRoute);
app.use('/about', aboutRoute);

// not found error handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// error handling middleware
app.use((err, req, res, next) => {
    err.status = err.status || 500;
    // set locals
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

// init
app.listen(port, () => {
    console.log(`App running at port :${port}`);
});