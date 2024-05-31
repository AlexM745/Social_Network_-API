// importing the neccesary packages and file
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// setting up the varibles for the port and app (enviroment variables)

const PORT = process.env.PORT || 3001;
const app = express();

//use middleware to parse the data
app.use(express.urlencoded ({extended:true}));
app.use(express.json());

// use the routes tha come from the routes.js

app.use(routes);

// connects to mongoDB and starts the server

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server forrunning on port ${PORT}!`);
    })
})