//importing the thought, user, and reaction models
const { Thought, Reaction } = require("../models");
// importing dependecy from mongoose library
const { Types } = require("mongoose");

// the thought controller object that has all the handlers for the api calls
const ThoughtController = {
    // get all thoughts handler
    async getThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.status(200).json(thought);;
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get one thought by id handler
    async getThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.courseId });
            
            if (!thought) {
                res.status(404).json({ message: "No thoughts found with this id!" });
            }
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create thought handler
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.status(200).json(thought);;
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //delete thought by id handler
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({_id:req.params.thoughtId});
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
// update thought handler
    async updateThought(req, res) {
        try {
          const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
          );
    
          if (!thought) {
            res.status(404).json({ message: 'No thought found with this id!' });
          }
    
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      // create reaction handler 
      async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate( 
                { _id: req.params.thoughtId },
                { $addToSet: {reactions: req.body}},
                { runValidators: true, new: true });
                thought ? res.json(thought): res.status(404).json({message: notFound});
        } catch (err) {
            res.status(500).json(err);
        }
    },
    

    // delete reaction handler
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate( 
                { _id: req.params.thoughtId },
                { $pull: {reactions: {reactionId:req.params.reactionId}}},
                { runValidators: true, new: true });
            thought ? res.json(thought): res.status(404).json({message: notFound});
        } catch (err) {
            res.status(500).json(err);
        }
    },

};

// exports the thought controller
module.exports = ThoughtController