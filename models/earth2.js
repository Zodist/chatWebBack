const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    code: { type: String },
    new_tile_price: { type: Number },
    marketplace_tile_value: { type: Number },
    total_sold_tiles: { type: Number },
    assume_total_price: { type: Number },
    time: {type: Date},
});

module.exports = mongoose.model('Country', countrySchema);