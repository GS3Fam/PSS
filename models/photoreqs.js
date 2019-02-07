let
  mongoose = require('mongoose'),
  PhotoReqSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    picture: { type: mongoose.Schema.Types.ObjectId, ref: 'Pictures' },
    created: { type: Date, default: Date.now },
    highRes: String,
    highResFile: String,
    slotExpire: { type: Date, default: Date.now }
  })

let model = module.exports = mongoose.model('PhotoReqs', PhotoReqSchema, 'PhotoReqs');
