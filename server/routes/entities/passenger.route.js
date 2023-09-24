const express = require("express");
const router = express();

const PassengerSchema = require("../../models/entity/passenger.model");

// Create Passenger
router.post("/api/createPassenger", async (req, res) => {
    try {
        // Get the user ID from the decoded token

        const passenger = new PassengerSchema({ ...req.body });
        const savedPassenger = await passenger.save();
        res.json(savedPassenger);
    } catch (error) { // Add error variable to catch block
        console.error("Error creating Passenger:", error); // Log the error for debugging
        res.status(500).json({ error: 'Error responding to Passenger' });
    }
});

// Get All Passengers
router.get("/api/getPassengers", async (req, res) => {
    try {

        const findPassenger = await PassengerSchema.find();
        res.json(findPassenger);
    } catch (error) { // Add error variable to catch block
        console.error("Error creating Passenger:", error); // Log the error for debugging
        res.status(500).json({ error: 'Error responding to Passenger' });
    }
});

// Read Single Passenger
router.get("/api/passenger/:id", async (req, res) => {
    const findPassenger = await PassengerSchema.findById(req.params.id)
    res.json(findPassenger)
});


// Update Passenger
router.patch("/api/updatePassenger/:id", async (req, res) => {
    const passengerId = req.params.id; // Get the Reply id from the URL parameters

    try {
        // Create an object containing the fields to update (excluding _id)
        const updatedFields = { ...req.body };
        delete updatedFields._id; // Remove _id if it's present in the request body

        // Update the Passenger document by ID
        const result = await PassengerSchema.updateOne({ _id: passengerId }, { $set: updatedFields });

        if (result.nModified === 0) {
            return res.status(404).json({ error: "Passenger not found or no changes made." });
        }

        res.json({ message: "Passenger updated successfully." });
    } catch (error) {
        res.status(500).json({ error: "Error updating the Passenger." });
    }
});


// Read Single Passenger
router.delete("/api/deletePassenger/:id", async (req, res) => {
    const findPassenger = await PassengerSchema.findByIdAndDelete(req.params.id)
    res.json(findPassenger)
});

module.exports = router
