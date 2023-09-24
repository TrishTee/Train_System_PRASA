const mongoose = require("mongoose");

const TripSchema = mongoose.Schema({
    categoryOfTime: {
        type: String,
        enum: ["morning", "afternoon", "evening"]
    },
    trainNumber: {
        type: String
    },
    departStation: {
        type: String
    },
    arriveStation: {
        type: String
    },
    departTime: {
        type: String
    },
    arriveTime: {
        type: String
    },
    price: {
        type: Number
    }
});

module.exports = mongoose.model("Trip", TripSchema)