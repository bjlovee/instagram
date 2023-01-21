const {Schema, model} = require('mongoose')

const fruitSchema  = new Schema({
    name: String,
    readyToEat: Boolean,
    color: String
}, {
    timdysmpd:true
})

const Fruit = model