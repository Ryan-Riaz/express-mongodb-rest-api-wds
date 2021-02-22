require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const PORT = process.env.PORT || 5050;

// DB Connection
mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("open", () => console.log("db is connected"));

// middleware for json
app.use(express.json());

// our home page
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Home Page!</h1>");
});

const subscriberRoute = require("./routes/subscriberRoute");
app.use("/subscribers", subscriberRoute);

app.listen(PORT, () =>
    console.log(`server is listening on http://localhost:${PORT}`)
);
