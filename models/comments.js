let
  mongoose = require('mongoose'),
  CommentSchema = mongoose.Schema({
    picture: { type: mongoose.Schema.Types.ObjectId, ref: 'Pictures' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    comment: String,
    created: { type: Date, default: Date.now }
  })

let model = module.exports = mongoose.model('Comments', CommentSchema, 'Comments');
