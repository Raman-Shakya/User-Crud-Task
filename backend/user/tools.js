const jwt = require('jsonwebtoken');

const signToken = (data) => {
    return jwt.sign(data, "something");
}

const validateToken = (jwtToken) => {
    return jwt.verify(jwtToken, "something");
}

module.exports = { signToken, validateToken }