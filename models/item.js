const mongoose = require('mongoose')
const imageSchema = new mongoose.Schema({url: String})
const addressSchema = new mongoose.Schema({
    address: String,
    pincode: String,
    state: String,
    country: String
})
const contactSchema = new mongoose.Schema({
    email: String,
    phone: String,
    contact: String
})
const itemSchema = new mongoose.Schema({
    itemName: {
        type: String
    },
    itemDescription: {
        type: String
    },
    images: [imageSchema],
    itemLocation: {
        type: String,
        default: ''
    },
    itemGeoLocation: {
        type: String,
        default: ''
    },
    itemAddress: addressSchema,
    itemOwnerName: {
        type: String,
        default: ''
    },
    itemOwnerContact: {
        type: contactSchema,
        default: {}
    },
    itemFoundBy: {
        type: String,
        default: ''
    },
    itemFoundByContact: {
        type: contactSchema,
        default: {}
    },
    claimStatus: {
        type: Boolean,
        default: false
    },
    foundStatus: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('item', itemSchema)