let
  mongoose = require('mongoose'),
  UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    picture: String
  })

let model = module.exports = mongoose.model('Users', UserSchema, 'Users');
