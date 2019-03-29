const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    default: 'NoName',
  },
  id: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
  surname: {
    type: mongoose.SchemaTypes.String,
    default: 'NoName',
  },
  position: {
    type: mongoose.SchemaTypes.String,
    default: 'NoPosition',
  },
  position2: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
  position3: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
  injured: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
  phone: {
    type: mongoose.SchemaTypes.String,
    default: 'NoPhone',
  },
  pass: {
    type: mongoose.SchemaTypes.String,
    default: 'NoPass',
  },
  foot: {
    type: mongoose.SchemaTypes.String,
    default: 'NoFoot',
  },
  standard: {
    type: mongoose.SchemaTypes.Boolean,
    default: true,
  },
  isHidden: {
    type: mongoose.SchemaTypes.Boolean,
    default: true,
  },
  isEditable: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Card', CardSchema)
