const expres = require("express");
const router = expres.Router();
const TicketSchema = require("../../models/content/ticket.model")
const paymentGate = require("../../middleware/payment/paymentGate")

require("dotenv").config('.env');

// Route to handle payments and create a new ticket
router.post('/api/process-payment', async (req, res) => {
    try {
        const { cardDetails, trip, passenger } = req.body;

        // Create a new ticket using cardDetails, trip, and passenger data
        const newTicket = new TicketSchema({
            trip,
            passenger,
            cardDetails,
            status: 'active'
        });

        await newTicket.save(); // Save the ticket to the database

        // Send success response with the created ticket
        res.status(200).json({ message: 'Ticket created successfully', ticket: newTicket });
    } catch (error) {
        // Handle errors
        console.error('Error creating ticket:', error);
        res.status(500).json({ error: 'Error creating ticket' });
    }
});

// Route to get tickets (example route, you can modify it based on your requirements)
router.get('/api/tickets', async (req, res) => {
    try {
        const tickets = await TicketSchema.find();
        res.status(200).json(tickets);
    } catch (error) {
        console.error('Error retrieving tickets:', error);
        res.status(500).json({ error: 'Error retrieving tickets' });
    }
});

module.exports = router