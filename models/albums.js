let
  mongoose = require('mongoose'),
  AlbumSchema = mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    name: { type: Date, default: 'New Album' },
    created: { type: Date, default: Date.now },
    privacy: String
  })

let model = module.exports = mongoose.model('Albums', AlbumSchema, 'Albums');
