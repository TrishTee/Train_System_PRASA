const mongoose = require("mongoose");

const TicketSchema = mongoose.Schema({
    trip: {
        type: String
    },
    passenger: {
        type: String
    },
    cardDetails: {
        cardNumber: {
            type: Number
            // have a validation that accepts the max no of a bank no that only accepts integers
        },
        cardExpiryYear: {
            type: Number
        },
        cardExpiryMonth: {
            type: Number
        },
        cardBrand: {
            type: Number
        },
        cardBank: {
            type: Number
        }
    }
    dayBought: {
        type: Date
    },
    status: {
        type: String,
        enum: ["active", "used", "cancelled"]
    }
});

module.exports = mongoose.model("Ticket", TicketSchema)