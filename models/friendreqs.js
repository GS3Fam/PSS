let
  mongoose = require('mongoose'),
  FriendReqSchema = mongoose.Schema({
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    created: { type: Date, default: Date.now }
  })

let model = module.exports = mongoose.model('FriendReqs', FriendReqSchema, 'FriendReqs');
