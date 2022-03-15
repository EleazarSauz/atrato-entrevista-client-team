const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    secondName: { type: String, required: true },
    paternalName: { type: String, required: true },
    maternalName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    birthday: { type: Date, required: true },
    status: { type: Number, default: 1 },
    analyst: { type: String, required: true },
    card: { type: mongoose.Schema.Types.Mixed, required: true },
  });

const User = mongoose.model('User', userSchema);
  
module.exports = {
    User
}