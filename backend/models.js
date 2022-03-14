const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    secondName: String,
    paternalName: String,
    maternalName: String,
    username: String,
    email: String,
    phone: String,
    birthday: Date,
    status: String,
    analyst: String,
    card: mongoose.Schema.Types.Mixed,
  });

const User = mongoose.model('User', userSchema);
  
module.exports = {
    User
}