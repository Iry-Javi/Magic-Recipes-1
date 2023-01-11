const mongoose = require("mongoose");
const Recipe = require("../models/Recipe.model"); // the DroneModel will be used to create new drones in our DB

// the array of drone objects to be created
const recipes = [
  { cousine: "italian", title: 'Italian Pasta', imageUrl: 'public/images/italian-pasta.jpg', duration: '30', ingredients: ['salz', 'flour'], preparation: 'fhfhjgjhg', owner: {}, comments: []},
  
  { cousine: "italian", title: 'Italian Pasta', imageUrl: 'public/images/italian-pasta.jpg', duration: '30', ingredients: ['salz', 'flour'], preparation: 'fhfhjgjhg', owner: {}, comments: []},

  { cousine: "italian", title: 'Italian Pasta', imageUrl: 'public/images/italian-pasta.jpg', duration: '30', ingredients: ['salz', 'flour'], preparation: 'fhfhjgjhg', owner: {}, comments: []}

];

// below is the exact same database connection setup as our main app 'db/index.js'
// inside the .then() block we will seed our DB (Once the DB connection is established)


const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project2";

mongoose
  .connect(MONGO_URI)
  .then(x => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);
 
    // Create new documents in the books collection
    return Recipe.create(recipes);
  })
  .then(recipesFromDB => {
    console.log(`Created ${recipesFromDB.length}recipes`);
 
    // Once the documents are created, close the DB connection
    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log('DB connection closed!');
  })
  .catch(err => {
    console.log(`An error occurred while creating recipes from the DB: ${err}`);
  });