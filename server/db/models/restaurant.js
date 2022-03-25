const mongoose = require('mongoose')

const restaurantSchema = mongoose.Schema({
    chef: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobileImage: {
        type: String,
        required: true,
    },
    desktopImage: {
        type: String,
        required: true,
    },
    bigImage: {
        type: String,
        required: true,
    },
})


module.exports = mongoose.model("restaurant", restaurantSchema);