const express = require('express')
const routes = express.Router()


//Buscar dados
let db = [
    {'1': { Nome: 'Cliente 1', Idade: '20'}},
    {'2': { Nome: 'Cliente 2', Idade: '30'}},
    {'3': { Nome: 'Cliente 3', Idade: '25'}},
    {'4': { Nome: 'Cliente 4', Idade: '35'}},
    {'5': { Nome: 'Cliente 5', Idade: '45'}}

]

//Inserir dados
routes.get('/', (req, res) =>{
    return res.json(db)
})


routes.post('/add', (req, res) =>{
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
        return res.json(body)

})

//alterar
/*
routes.put('/:id', (req, res) => {
    const id =  req.params.id
    const body = req.body

    let newDB = db.filter(item =>{
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})*/

//delete
routes.delete('/:id', (req, res) => {
    const id =  req.params.id

    let newDB = db.filter(item =>{
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})
module.exports = routes