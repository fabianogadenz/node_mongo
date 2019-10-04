const mongoose = require('.././database');

const TipoAtividadeSchema = new mongoose.Schema({
    item: {
        type: String,
        require: true,
    },
    descricao: {
        type: String,
    },
    pontuacaoUnitaria: {
        type: Number,
    },
    pontuacaoMaxima: {
        type: Number,
    },
    descricao: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const TipoAtividade = mongoose.model('TipoAtividade', TipoAtividadeSchema);

module.exports = TipoAtividade;