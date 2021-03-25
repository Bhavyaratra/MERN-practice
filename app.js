const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();


 app.listen(3001)

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.use('/api/', require('./routes/blogRoutes'))

// routes
app.get('/', (req, res) => {
  res.send('home');
});



app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});