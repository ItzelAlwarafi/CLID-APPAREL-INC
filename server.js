const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require ('cors')
const customerControllers=require('./controllers/customerControllers')
const clothesController = require("./controllers/clothesController")
// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();
// app.use() middleware here
app.use(bodyParser.json());
app.use(cors())


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get("/", (req, res) => res.send("This is our landing page!"));

app.get("/customers", customerControllers.getAllCustomers)

app.get("/customers/:query", customerControllers.getCustomer)

app.post("/customers", customerControllers.createCustomer)

app.delete("/customers/:id", customerControllers.deleteCustomer)

app.get("/clothes", clothesController.getAllClothes)
app.get("/clothes/:id", clothesController.getOneClothes)
