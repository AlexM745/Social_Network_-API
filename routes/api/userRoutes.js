// importing express with router dependency
const router = require("express").Router();

//importing the user api handlers from the controllers
const{
    getUsers, 
    getUser,
    createUser, 
    deleteUser,
    updateUser,
    addFriend,  
} = require("../../controllers/userController");

// api/user 
// Get and Post  users
router.route("/").get(getUsers).post(createUser);

// api/user/:userId
router.route("/:userId").get(getUser).put(updateUser).delete(deleteUser);

// POST to add friend
router.route("/:userId/friends/:friendId").post(addFriend)

// export the route

module.exports = router;






