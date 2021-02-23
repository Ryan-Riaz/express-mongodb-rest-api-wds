const Subscriber = require("../models/subscriber");

// get all subscribers
async function getAllSubscribers(req, res) {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// create a single subscriber
async function createSubscriber(req, res) {
    const { name, subscriberToChannel } = req.body;
    const subscriber = new Subscriber({ name, subscriberToChannel });

    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// get a single subscriber
function getSingleSubscriber(req, res) {
    res.json(res.subscriber);
}

// update a subscriber
async function updateSubscriber(req, res) {
    const { name, subscriberToChannel } = req.body;
    if (name != null) {
        res.subscriber.name = name;
    }
    if (subscriberToChannel != null) {
        res.subscriber.subscriberToChannel = subscriberToChannel;
    }
    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// delete a single subscriber
async function deleteSubscriber(req, res) {
    try {
        await res.subscriber.remove();
        res.json({ message: "delete the user" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllSubscribers,
    createSubscriber,
    getSingleSubscriber,
    updateSubscriber,
    deleteSubscriber,
};
