
require("dotenv").config('.env')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Ticket = require("../../models/content/ticket.model");

const paymentGate = async (req, res, next) => {
    try {
        const { amount, currency, paymentMethodId, trip, passenger, cardDetails } = req.body;

        // Create payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method: paymentMethodId,
            confirmation_method: 'manual',
            confirm: true,
        });

        // If payment is successful, create a ticket
        if (paymentIntent.status === 'succeeded') {
            const newTicket = new Ticket({
                trip,
                passenger,
                cardDetails,
                status: 'active' // Set ticket status as active
            });

            await newTicket.save(); // Save the ticket to the database

            // Send success response to client
            res.status(200).json({ clientSecret: paymentIntent.client_secret, ticket: newTicket });
        } else {
            // If payment fails, send an error response
            res.status(400).json({ error: 'Payment failed' });
        }
    } catch (error) {
        // Handle errors
        console.error('Error processing payment:', error);
        res.status(500).json({ error: 'Payment failed' });
    }
};

module.exports = paymentGate;

