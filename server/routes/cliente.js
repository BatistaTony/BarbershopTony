const router = require('express').Router()
const Cliente = require('./../model/cliente')


router.get('/get', async (req,res)=>{
    try {
        
        const clientes = await Cliente.find()
        res.json({clientes})
        
    } catch (error) {
        console.log(error)
    }
})

router.post('/reservar', async (req,res)=>{
    try {
        const clExist = await Cliente.findOne({telefone: req.body.telefone})

        if(clExist){
            res.json({message: 'Ja foi feita uma reserva com este numero'})
        }else{
            const clObj  = new Cliente({
                nome: req.body.nome,
                telefone: req.body.telefone
            })

            const savedCliente = await clObj.save()

            res.json(savedCliente)
        }
    } catch (error) {
        console.log(error)
    }
})

router.post('/delete', async (req,res)=>{
    try {
        const delCl = await Cliente.findOneAndDelete({telefone: req.body.telefone})

        res.json(delCl)
    } catch (error) {
        console.log(error)
    }
})



module.exports = router