const express = require("express");
app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const passengerRoute = require("./routes/entities/passenger.route")

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require("dotenv").config({ path: '.env' });

// Route Init
app.use(passengerRoute)

// Mongoose Connection
mongoose.connect(
    process.env.DB_Connection,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "prasa_train_ticket_system" //Collection Name
    }
).then(() => {
    console.log("Connected to DB")
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`) })