let
  mongoose = require('mongoose'),
  UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    picture: String,
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }]
  })

let model = module.exports = mongoose.model('Users', UserSchema, 'Users');
