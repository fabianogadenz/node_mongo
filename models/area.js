const mongoose = require('.././database');

const AreaSchema = new mongoose.Schema({
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

const Area = mongoose.model('Area', AreaSchema);

module.exports = Area;