const express = require('express')
const calc = require('./calc')
const app = express()
app.disable("x-powered-by");
const port = 3000

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/sum', (req,res) => {
    a = Number(req.query.a) 
    b = Number(req.query.b) 
    res.json({message: 'Sum Calculator Rocks!', result: calc.sum(a, b)})
})

app.get('/sub', (req,res) => {
    a = Number(req.query.a) 
    b = Number(req.query.b) 
    res.json({message: 'Sub Calculator Rocks!', result: calc.sub(a, b)})
})

app.get('/times', (req,res) => {
    a = Number(req.query.a) 
    b = Number(req.query.b) 
    res.json({message: 'Times Calculator Rocks!', result: calc.times(a, b)})
})

app.get('/squared', (req,res) => {
    a = Number(req.query.a) 
    res.json({message: 'Squared Calculator Rocks!', result: calc.squared(a)})
})

var server = app.listen(port, ()=> {
})


module.exports = server

