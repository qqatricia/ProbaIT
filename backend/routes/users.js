const express=require('express')
const router=express.Router()

//Toti
router.get('/',(req,res)=>{
    res.send('Hello World')

})
//Unul singur
router.get('/:id',(req,res)=>{

    
})
//Creerea unuia
router.post('/',(req,res)=>{

    
})
//Updatarea unuia 
router.patch('/',(req,res)=>{

    
})

//Stergere
router.delete('/:id',(req,res)=>{

    
})
module.exports =router