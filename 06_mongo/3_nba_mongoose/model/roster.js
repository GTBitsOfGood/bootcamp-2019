const mongoose = require("mongoose");

const RosterSchema = new mongoose.Schema({
        Name: {
            type: String,
            required: true
        },
        JerseyNumber: {
            type: Number,
            required: false
        },
        Team: {
            type: String,
            required: true
        }



});

module.exports = mongoose.model("roster", RosterSchema);
