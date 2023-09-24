const express = require("express");
const router = express();

const StationSchema = require("../../models/content/station.model");

// Create Station
router.post("/api/createStation", async (req, res) => {
    try {
        // Get the user ID from the decoded token

        const Station = new StationSchema({ ...req.body });
        const savedStation = await Station.save();
        res.json(savedStation);
    } catch (error) { // Add error variable to catch block
        console.error("Error creating Station:", error); // Log the error for debugging
        res.status(500).json({ error: 'Error responding to Station' });
    }
});

// Get All Stations
router.get("/api/getStations", async (req, res) => {
    try {

        const findStation = await StationSchema.find();
        res.json(findStation);
    } catch (error) { // Add error variable to catch block
        console.error("Error creating Station:", error); // Log the error for debugging
        res.status(500).json({ error: 'Error responding to Station' });
    }
});

// Read Single Station
router.get("/api/Station/:id", async (req, res) => {
    const findStation = await StationSchema.findById(req.params.id)
    res.json(findStation)
});


// Update Station
router.patch("/api/updateStation/:id", async (req, res) => {
    const StationId = req.params.id; // Get the Reply id from the URL parameters

    try {
        // Create an object containing the fields to update (excluding _id)
        const updatedFields = { ...req.body };
        delete updatedFields._id; // Remove _id if it's present in the request body

        // Update the Station document by ID
        const result = await StationSchema.updateOne({ _id: StationId }, { $set: updatedFields });

        if (result.nModified === 0) {
            return res.status(404).json({ error: "Station not found or no changes made." });
        }

        res.json({ message: "Station updated successfully." });
    } catch (error) {
        res.status(500).json({ error: "Error updating the Station." });
    }
});


// Read Single Station
router.delete("/api/deleteStation/:id", async (req, res) => {
    const findStation = await StationSchema.findByIdAndDelete(req.params.id)
    res.json(findStation)
});

module.exports = router
