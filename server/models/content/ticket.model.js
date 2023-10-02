const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
    trip: {
        type: String
    },
    passenger: {
        type: String
    },
    cardDetails: {
        cardNumber: {
            type: Number,
            // Add validation for card number (example: max length 16 for most credit cards)
            validate: {
                validator: function (value) {
                    return /^[0-9]{16}$/.test(value);
                },
                message: 'Invalid card number'
            }
        },
        cardExpiryYear: {
            type: Number
        },
        cardExpiryMonth: {
            type: Number
        },
        cardBrand: {
            type: String
        },
        cardBank: {
            type: String
        }
    },
    dayBought: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ["active", "used", "cancelled"],
        default: "active"
    }
});

const Ticket = mongoose.model('Ticket', TicketSchema);
module.exports = Ticket;
