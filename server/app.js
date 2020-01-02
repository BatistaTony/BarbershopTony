const express = require('express') 

const app = express()

require('./database')


app.use(express.json())



app.use('/cliente', require('./routes/cliente'))

   


app.listen(5000, ()=>{
    console.log('Server  runing')
})