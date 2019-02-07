let
  mongoose = require('mongoose'),
  SharedPhotoSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    picture: { type: mongoose.Schema.Types.ObjectId, ref: 'Pictures' },
    shareStatus: Boolean,
    created: { type: Date, default: Date.now }
  })

let model = module.exports = mongoose.model('SharedPhotos', SharedPhotoSchema, 'SharedPhotos');
