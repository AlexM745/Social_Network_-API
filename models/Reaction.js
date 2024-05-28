const { schema } = require("./User");

// importing the dependecies schema and types from mongoose library
const {Schema, Types} = reuqire("mongoose");

// creating the reaction schema
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

    }
)



//exports the reaction schema
module.exports = reactionSchema;