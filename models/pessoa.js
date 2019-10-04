const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const PessoaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type:String,
        unique:true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    siape: {
        type:Number,
        uppercase: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

PessoaSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const Pessoa = mongoose.model('Pessoa', PessoaSchema);

module.exports = Pessoa;