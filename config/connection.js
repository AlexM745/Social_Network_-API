// imported mongoose to connect to mongoDB
const mongoose = require("mongoose");
// warp mongoose around local connection to MongoDB
mongoose.connect("mongodb://localhost:27017/socialNetworkDB");

//exports the connection 
module.exports = mongoose.connection;