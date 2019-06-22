const mongoose = require('mongoose');

const AssignmentSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    course: {
        type: String,
        required: true
    },

    addedDate: {
        type: String,
        default: Date.now()
    },

    deadline: {
        type: String,
        required: true
    },

    attachment: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('assignment', AssignmentSchema);