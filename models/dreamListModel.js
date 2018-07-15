const mongoose = require('mongoose')
const Schema = mongoose.Schema

let DreamSchema = new Schema({
    name: {
        type: String,
        required: 'enter the name of the dream'
    },
    created_date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ['public', 'private']
      }],
      default: ['public']
    }
})

module.exports = mongoose.model('Dreams', DreamSchema)