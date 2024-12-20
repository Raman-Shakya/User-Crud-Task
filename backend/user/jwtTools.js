const jwt = require('jsonwebtoken');
const userModel = require('./model/model');

const jwtSecret = "something";

const signToken = (data) => {
    return jwt.sign(data, jwtSecret);
}

const validateToken = async (jwtToken) => {
    const userName = jwt.verify(jwtToken, jwtSecret);
    if (!userName) throw new Error("Invalid Token");

    return new Promise((resolve, reject) => {
        userModel.find({
            userName: userName
        })
            .then((response) => resolve(userName))
            .catch((error) => reject(error))
    })
}

module.exports = { signToken, validateToken }