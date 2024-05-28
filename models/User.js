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

        // the thoughts array has object id type and references thought
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought"
            }
        ],
        // // friends arrya has object id type and references user
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
    }, 
    // transforms to json virutals are visible
    { toJSON: {
        virtuals: true, // enables virtuals to been seen when user document is transformed to JSON. 
    },
    id :false, // disables the default _id:

    }
);
// virtual property friendCount which reutrns number of friends user has in the friends array
userSchema.virtual("friendCount").get(function(){
    return this.friends.length; // the length of the friends array
});
// creates the User model from the userSchema
const User = model("User", userSchema);

// exports the User model
module.exports = User