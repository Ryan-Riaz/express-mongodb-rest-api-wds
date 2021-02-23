// import dotenv for credential database info
require("dotenv").config();

// import express app
const express = require("express");
const app = express();

// server port from env
const PORT = process.env.PORT || 5050;

// import mongoose
const mongoose = require("mongoose");

// DB Connection
mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

// database events
const db = mongoose.connection;
db.on("open", () => console.log("db is connected"));

// middleware for json
app.use(express.json());

// our home page
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Home Page!</h1>");
});

// import subscriber route
const subscriberRoute = require("./routes/subscriberRoute");
app.use("/subscribers", subscriberRoute);

// start the server
app.listen(PORT, () =>
    console.log(`server is listening on http://localhost:${PORT}`)
);
