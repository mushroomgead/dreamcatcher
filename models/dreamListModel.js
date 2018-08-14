const mongoose = require('mongoose')
const Schema = mongoose.Schema

let DreamSchema = new Schema({
    title: {
      type: String,
      required: 'enter the name of the dream'
    },
    description: {
      type: String,
    },
    authour: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false
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
// comment test
module.exports = mongoose.model('Dreams', DreamSchema)
