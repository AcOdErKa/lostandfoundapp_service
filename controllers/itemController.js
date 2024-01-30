const item = require("../models/item");

const addItem = (req, res) => {
    res.status(200).json({message: "Item Added"})
}

module.exports = {addItem}