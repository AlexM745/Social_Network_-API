// importing the neccesary packages and file
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// setting up the varibles for the port and app (enviroment variables)

const PORT = process.env.PORT || 3001;
const app = express();




