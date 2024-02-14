const express = require('express')
const db = require('./db')
const clothesController = require('./controllers/clothesController')
const customerController = require('./controllers/customerController')


const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req, res) => res.send('Hello World'))
app.get('/clothes', clothesController.getAllClothes)
app.get('/clothes/:id', clothesController.getOneClothes)
app.get('/customer', recipesController.getAllCustomer)
app.get('/customer/:id', recipesController.getOneCustomer)


app.listen(PORT, ()=> console.log('Server running!'))