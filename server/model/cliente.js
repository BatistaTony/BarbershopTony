const mongoose = require('mongoose')

const cliente = mongoose.Schema({
    nome: {
        type: String,
        required:true
    },
    telefone: {
        type: String,
        required: true
    }
})


module.exports  = mongoose.model('cliente', cliente)