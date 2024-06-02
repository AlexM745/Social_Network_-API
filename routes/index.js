// importing thr router dependecy from express library
const router = require("express").Router();

//importing the user and thought routes through the api folder
const apiRoutes = require("./api");

// defining the routes for the api
router.use("/api", apiRoutes);

router.use((req, res) => {
    return res.status(404).send("Not found");
});

//exporting the router
module.exports = router;