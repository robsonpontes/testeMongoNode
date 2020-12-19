const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const Db = require('mongodb/lib/db')

const uri = "mongodb+srv://fabio:peludo@cluster0.9kzve.mongodb.net/contrato?retryWrites=true&w=majority"

MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
    db = client.db('contrato')

    app.listen(3001, function(){
        console.log('Servidor em funcionamento 3001')
    })
})

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.post('/show', (req, res) =>{

    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('Salvo no banco de dados')
        res.redirect('/')

    })
})