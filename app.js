const express = require("express");
const mongoose = require("mongoose");
const bookRoutes= require("./routes/books.js");
const userRoutes= require("./routes/users.js");
const cors= require('cors');
const path = require ("path");
const helmet= require("helmet");


const app=express();
app.use(cors());
app.use(helmet(
  {crossOriginResourcePolicy: false}));


mongoose.connect("mongodb+srv://acroissantguyamier:Aec5XYV5yCFoJLMY@ocprojet6.80lov.mongodb.net/?retryWrites=true&w=majority&appName=OCProjet6")
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());


app.use("/api/books", bookRoutes);
app.use("/api/auth", userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports=app;