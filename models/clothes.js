const {Schema} = require('mongoose')

const Clothes = new Schema(
    {
        productName: {type: String, required: true },
        type: {type: String, required: true},
        sizes: {type: Array, required: true},
        prices: {type: Number, required: true},
        color: {type: String, required: true},
        gender: {type: String, required: true},
        description: {type: String, required: true},
        machineWashable: {type: Boolean, required: true}
    },


    { timestamps: true} 
)

module.exports = Clothes