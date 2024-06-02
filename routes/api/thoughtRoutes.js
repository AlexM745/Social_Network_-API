// importing express for routing
const router = require("express").Router();

//importing the user api handlers from the controllers
const {
    getThoughts,
    getThought,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction,
} = require("../../controllers/thoughtController");

// api/thoughts 
// GET and POST Thoughts
router.route("/").get(getThoughts).post(createThought);

// api/users/:userId
//GET, PUT, DELETE a Thought by id
router.route("/:thoughtId").get(getThought).put(updateThought).delete(deleteThought);

//POST reactions
router.route("/:thoughtId/reactions").post(createReaction)

//  DELETE reactions
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

// export the route

module.exports = router;