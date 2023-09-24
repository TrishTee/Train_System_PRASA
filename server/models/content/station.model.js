const mongoose = require("mongoose");

const StationSchema = mongoose.Schema({
    name: {
        type: String
    },
    openingTime: {
        type: String
    },
    closingTime: {
        type: String
    },
    numberOfTrips: {
        type: Number,
        default: 12
    },
    numberOfTicketsBought: [{
        type: String
    }],
    numberOfTicketsCancelled: [{
        ticketId: {
            type: String
        },
        dateCancelled: {
            type: String
        }
    }],
    numberOfTicketsAvailable: {
        type: Number,
        default: 12 //Multiply by the number seats, seats are variables as they change when people buy ticks
        // the value of this will be a function that calculates the sum of 
        //  number of trips - no of tickets bought + no of tickets cancelled
    }
});

module.exports = mongoose.model("Station", StationSchema)