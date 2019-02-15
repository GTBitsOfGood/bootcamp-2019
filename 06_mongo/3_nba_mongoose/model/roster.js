const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RosterSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    JerseyNumber: {
        type: Number,
    },
    Team: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Roster", RosterSchema);
