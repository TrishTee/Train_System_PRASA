const mongoose = require("mongoose");

const PassengerSchema = mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    dob: {
        type: String
    },
    gender: {
        type: String
    },
    idNumber: {
        type: Number
    },
    phoneNumber: {
        type: Number
    },
});

module.exports = mongoose.model("Passenger", PassengerSchema)