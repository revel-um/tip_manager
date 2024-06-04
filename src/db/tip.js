const mongoose = require('mongoose');

const TipDocument = {
    place: {
        type: String,
        required: true
    },
    totalAmount: {
        type: String,
        required: true
    },
    tipAmount: {
        type: String,
        required: true
    }
};

const tipSchema = new mongoose.Schema(TipDocument, { timestamps: true });

// Create a User model based on the user schema
const Tip = mongoose.model('Tip', tipSchema);

// Export the User model
module.exports = Tip;
