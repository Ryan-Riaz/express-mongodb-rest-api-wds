const mongoose = require("mongoose");

// create schema for our subscriber
const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscriberToChannel: {
        type: String,
        required: true,
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model("subscriber", subscriberSchema);
