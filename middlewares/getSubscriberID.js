// middleware of if a subscriber exists
const Subscriber = require("../models/subscriber");

async function getSubscriber(req, res, next) {
    const { id } = req.params;
    let subscriber;

    try {
        subscriber = await Subscriber.findById(id);
        if (subscriber == null) {
            res.status(404).json({ message: "No subscriber found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

    res.subscriber = subscriber;
    next();
}
module.exports = getSubscriber;
