// importing the User model
const { User } = require("../models");

// the user controller object that has various handlers for api calls
const UserController = {

    // get all users
    async getUsers(req, res) {
        try {
            const userData = await User.find();
            res.status(200).json(userData);;
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //get one user by their id
    async getUser(req, res) {
        try {
            const userData = await User.findById(req.params.userId);
            res.status(200).json(userData);;
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //create user
    async createUser(req, res) {
        try {
            const userData = await User.create(req.body);
            res.status(200).json(userData);;
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //update user by id
     async updateCourse(req, res) {
    try {
      const course = await Course.findOneAndUpdate(
        { _id: req.params.courseId },
        { $aset: req.body },
        { runValidators: true, new: true }
      );

      if (!course) {
        res.status(404).json({ message: 'No course with this id!' });
      }

      res.json(course);
    } catch (err) {
      res.status(500).json(err);
    }
  },

    //delete user by id
    async deleteUser(req, res) {
        try {
          const userData = await Course.findOneAndDelete({ _id: req.params.courseId });
    
          if (!userData) {
            res.status(404).json({ message: 'No user found with this id!' });
          }
        } catch (err) {
          res.status(500).json(err);
        }
      },


    //add friend to user
    async addFriend(req, res) {
        try {
            const userData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                // aggregating to the db to add a friend 
                { $addToSet: { friends: req.body.friendId || req.params.friendId } },
                {new:true}
            );
            if (!userData) {
                res.status(404).json({ message: "No user found with this id!" });
            }
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },


};


// exporting the user controller
module.exports = UserController;
