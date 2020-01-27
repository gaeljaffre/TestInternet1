var express = require('express');
var app = express();

app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

var MatiereController = require('./matiere/MatiereController');
app.use('/matieres', MatiereController);

module.exports = app;
