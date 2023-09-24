const express = require("express");
const router = express();

const TripSchema = require("../../models/content/trip.model");

// Create Trip
router.post("/api/createTrip", async (req, res) => {
    try {

        const Trip = new TripSchema({ ...req.body });
        const savedTrip = await Trip.save();
        res.json(savedTrip);
    } catch (error) { // Add error variable to catch block
        console.error("Error creating Trip:", error); // Log the error for debugging
        res.status(500).json({ error: 'Error responding to Trip' });
    }
});

// Get All Trips
router.get("/api/getTrips", async (req, res) => {
    try {

        const findTrip = await TripSchema.find();
        res.json(findTrip);
    } catch (error) { // Add error variable to catch block
        console.error("Error creating Trip:", error); // Log the error for debugging
        res.status(500).json({ error: 'Error responding to Trip' });
    }
});

// Read Single Trip
router.get("/api/Trip/:id", async (req, res) => {
    const findTrip = await TripSchema.findById(req.params.id)
    res.json(findTrip)
});


// Update Trip
router.patch("/api/updateTrip/:id", async (req, res) => {
    const TripId = req.params.id; // Get the Reply id from the URL parameters

    try {
        // Create an object containing the fields to update (excluding _id)
        const updatedFields = { ...req.body };
        delete updatedFields._id; // Remove _id if it's present in the request body

        // Update the Trip document by ID
        const result = await TripSchema.updateOne({ _id: TripId }, { $set: updatedFields });

        if (result.nModified === 0) {
            return res.status(404).json({ error: "Trip not found or no changes made." });
        }

        res.json({ message: "Trip updated successfully." });
    } catch (error) {
        res.status(500).json({ error: "Error updating the Trip." });
    }
});


// Read Single Trip
router.delete("/api/deleteTrip/:id", async (req, res) => {
    const findTrip = await TripSchema.findByIdAndDelete(req.params.id)
    res.json(findTrip)
});

module.exports = router
