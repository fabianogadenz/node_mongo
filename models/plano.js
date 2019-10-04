const mongoose = require('.././database');

const PlanoSchema = new mongoose.Schema({
    ano: {
        type: Number,
        require: true,
    },
    Status: {
        type: String,
        require: true,
    },
    descricao: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const Plano = mongoose.model('Plano', PlanoSchema);

module.exports = Plano;