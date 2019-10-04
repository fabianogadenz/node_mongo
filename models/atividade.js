const mongoose = require('.././database');

const Atividadechema = new mongoose.Schema({
    quantidade: {
        type: Number,
    },
    validado: {
        type: Boolean,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const Atividade = mongoose.model('Atividade', Atividadechema);

module.exports = Atividade;