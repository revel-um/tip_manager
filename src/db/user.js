const mongoose = require('mongoose');

const UserDocument = {
    name: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    session: {
        type: String,
        required: true
    }
};

const userSchema = new mongoose.Schema(UserDocument, { timestamps: true });

// Create a User model based on the user schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
