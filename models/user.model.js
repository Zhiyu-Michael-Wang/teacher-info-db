const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true },
    detailType: { type: String, required: true },
    detail: { type: String, required: true },
    contact: { type: Array, required: true },
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema)


module.exports = User