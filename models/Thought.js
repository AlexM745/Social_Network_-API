// inports the dependecies of schema and model from mongoose
const { Schema, model } = require("mongoose");
//imports the reaction schema
const reactionSchema = require("./Reaction");

//creates the thought schema with required fields
const thoughtSchema = new Schema(
    {
        // thought text 
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        // the create at parameter that uses date to show the date of the whent thoughts are created
        createAt: {
            type: Date,
            // uses the date of today
            default: Date.now,
            // timestamp is the current date and is turned inot a string
            get: timestamp => new Date(timestamp).toLocaleString(),
        },
        username: {
            type: String,
            required: true,
        },
        // uses the reaction schema
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters:true, 
            virtuals:true, 
        },
        id:false, 
    }
);

// creates sub document schema fro reactions
const reactionSchema = new Schema(
    {
        // the id of the reaction 
        reactionId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(), 
        }, 
        // the body of each reaction with max lenght of 280 characters
        reactionBody:{
            type: String,
            required: true,
            maxLength:280,  

        },
        // the username of the person reacting 
        username:{
            type: String,
            required: true, 
        },
        // the date that the reaction was created
        createdAt:{
            type: Date,
            default: Date.now, 
            get: timestamp => new Date(timestamp).toLocaleDateString()
        },   
    }, 
    {
        // runs the getters when the reaction is turned into Json
        toJSON: {
            getters: true, 
        }, 
        id:false, 
    }
);

// setting up the viruals  with reaction count that returns the amount of reactions a thought has
    thoughtSchema.virtual("reactionCount").get(function(){
        return this.reactions.length// the length of all the reactions that a thought has
    });
// created the Thought model through the thoughtSchema
const Thought = model ("Thought", thoughtSchema)


// exports the thought model
module.exports = Thought;