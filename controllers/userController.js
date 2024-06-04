// importing the User model
const { User } = require("../models");

// the user controller object that has various handlers for api calls
const UserController = {

  // get all users
  async getUsers(req, res) {
    try {
      const user = await User.find();
      res.status(200).json(user);;
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get one user by their id
  async getUser(req, res) {
    try {
      const user = await User.findById(req.params.userId);
      res.status(200).json(user);;
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //create user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);;
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //update user by id
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.courseId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //delete user by id
  async deleteUser(req, res) {
    try {
      const user = await Course.findOneAndDelete({ _id: req.params.courseId });

      if (!user) {
        res.status(404).json({ message: 'No user found with this id!' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },


  //add friend to user
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        // aggregating to the db to add a friend 
        { $addToSet: { friends: req.body.friendId || req.params.friendId } },
        { new: true }
      );
      if (!user) {
        res.status(404).json({ message: "No user found with this id!" });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },


};


// exporting the user controller
module.exports = UserController;
