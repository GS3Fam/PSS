let
  mongoose = require('mongoose'),
  PictureSchema = mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    album: { type: mongoose.Schema.Types.ObjectId, ref: 'Albums' },
    name: String,
    filename: String,
    created: { type: Date, default: Date.now },
    privacy: String
  })

let model = module.exports = mongoose.model('Pictures', PictureSchema, 'Pictures');
