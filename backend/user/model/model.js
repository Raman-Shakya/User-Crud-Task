const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/userdb";
mongoose.connect(uri);
// const client = new MongoClient(uri);

// const db = client.db('userdb');
// const user = db.collection('user');

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

module.exports = mongoose.model('User', userSchema);