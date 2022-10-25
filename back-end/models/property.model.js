const mongoose = require('mongoose')
const propertySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    desc: {
        type: String,
    },
    brand: {
        type: mongoose.Types.ObjectId,
        ref: 'Brand'
    },
    fuel: {
        type: String,
    },
    seat: {
        type: String,
    },
    gear_type: {
        type: String,
    },
    laggage: {
        type: String,
    },
    price_per_day: {
        type: String,
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('Property', propertySchema)