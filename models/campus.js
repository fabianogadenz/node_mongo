const mongoose = require('.././database');

const CampusSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const Campus = mongoose.model('Campus', CampusSchema);

module.exports = Campus;