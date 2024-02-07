const item = require("../models/item");

const addItem = async (req, res) => {
    const itemRequest = req.body
    const result = await item.create(itemRequest)
    try {
        res.status(200).json({message: 'Iten added successfully',item: result})
    } catch(error) {
        console.error(error)
        res.status(500).json({message: "Error in Adding item"})
    }
    
}

const getAllItems = async (req, res) => {
    try {
        const allItems = await item.find()
        res.status(200).json({itemCount: allItems.length, items: allItems})
    } catch(error) {
        console.error(error)
        res.status(500).json({message: "Error in Fetching items"})
    }
}

const getItemsByUsername = async (req, res) => {
    try {
        const username = req.headers.username
        const allItems = await item.find({$or:[{'itemOwnerContact.username': username}, {'itemFoundByContact.username': username}]})
        res.status(200).json({username, items: allItems})
    } catch(error) {
        console.error(error)
        res.status(500).json({message: "Error in Fetching items"})
    }
}

const getItemsByID = async (req, res) => {
    try {
        const itemId = req.headers.itemid
        const allItems = await item.findById(itemId)
        res.status(200).json({item: allItems})
    } catch(error) {
        console.error(error)
        res.status(500).json({message: "Error in Fetching items"})
    }
}
module.exports = {addItem, getAllItems, getItemsByUsername, getItemsByID}