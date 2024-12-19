const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/userdb";
mongoose.connect(uri);

const userSchema = new mongoose.Schema({
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
})

module.exports = mongoose.model('users', userSchema);