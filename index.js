/*
Program name: index.js
Author: Matthew Lancaster
Date last updated: 8/11/2022
Purpose: JS file is a node.js server with express.js framework. Used to view web pages on a web browser
*/

/* ====== create node.js server with express.js framework ====== */
// dependencies
const express = require("express");
const app = express();
// PORT
const PORT = 5500;

app.listen(PORT, () => {
   console.info(`Server is running on PORT: ${PORT}`);
});

app.use(express.static('static'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/img', express.static(__dirname + '/public/img'));

//set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
   res.render('homepage')
});

app.get("/about", (req, res) => {
   res.render('about')
});

app.get("/education", (req, res) => {
   res.render('education')
});

app.get("/feedback", (req, res) => {
   res.render('feedback')
});

app.get("/projects", (req, res) => {
   res.render('projects')
});