const mongoose = require('mongoose')




class Database {
    constructor(){
        this._connect()
    }

    _connect(){
            mongoose.connect("mongodb://localhost/barbershop", { useNewUrlParser: true }).then(()=>{
                console.log('connected')
            }).catch(err=>{
                console.log("Not connected "+ err)
            }) 
    }
}

module.exports  = new Database