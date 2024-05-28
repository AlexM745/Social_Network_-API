//importing required dependencies schema and model from mongoose
const { Schema, model } = require("mongoose");

//Schema to create a user model with required fields

const userSchema = new Schema(
    {
        // name of the user
        username: {
            type: String,
            unique: true,
            require: true,
            trim: true,
        },
        // the email of the user with validation with a regex
        email: {
            type: String,
            require: true,
            unique: true,
            match: [/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, "Wrong Email, please add valid email"]
        },

        // the thoughts as objects and references thought
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought"
            }
        ],
        // // friends as objects and references user
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
    }
);