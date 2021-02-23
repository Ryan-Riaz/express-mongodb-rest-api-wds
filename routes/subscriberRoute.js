const express = require("express");

const router = express.Router();

// import subscriber controllers
const {
    getAllSubscribers,
    createSubscriber,
    getSingleSubscriber,
    updateSubscriber,
    deleteSubscriber,
} = require("../controllers/subscriberController");

// import subscriber middleware
const getSubscriberByID = require("../middlewares/getSubscriberID");

// get all subscribers
router.get("/", getAllSubscribers);

// create a single subscriber
router.post("/", createSubscriber);

// get a single subscriber
router.get("/:id", getSubscriberByID, getSingleSubscriber);

// update a subscriber
router.patch("/:id", getSubscriberByID, updateSubscriber);

// delete a single subscriber
router.delete("/:id", getSubscriberByID, deleteSubscriber);

module.exports = router;
