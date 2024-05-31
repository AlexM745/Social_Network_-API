//importing the thought, user, and reaction models
const { Thought, User, Reaction } = require("../models");
// importing dependecy from mongoose library
const { Types } = require("mongoose");

// the thought controller object that has all the handlers for the api calls
const ThoughtController = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughtData = await Thought.find();
            res.status(200).json(thoughtData);;
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get one thought by id
    async getThought(req, res) {
        try {
            const thoughtData = await Thought.findOne({ _id: req.params.courseId });
            
            if (!thoughtData) {
                res.status(404).json({ message: "No thoughts found with this id!" });
            }
            res.status(200).json(thoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create thought
    async createThought(req, res) {
        try {
            const thoughtData = await Thought.create(req.body);
            res.status(200).json(thoughtData);;
        } catch (err) {
            res.status(500).json(err);
        }
    },
}