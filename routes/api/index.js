 // importing express for router
 const router = require("express").Router();

 //importing user and thought routes
 const userRoutes = require("./userRoutes");
 const thoughtRoutes = require("./thoughtRoutes");

 //defining endpoints for the routes
 router.use("/user", userRoutes);
 router.use("/thought", thoughtRoutes);

 //export the router

 module.exports = router;
 