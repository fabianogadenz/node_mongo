const mongoose = require('.././database');

const DepartamentoSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    sigla: {
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

const Departamento = mongoose.model('Departamento', DepartamentoSchema);

module.exports = Departamento;