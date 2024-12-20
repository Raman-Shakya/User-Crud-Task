const { validateToken } = require('../jwtTools');

const isAuthenticated = async(req, res) => {
    if (!req.cookies.token) return res.status(401).send("Unauthorized access");
    var userName;
    try {
        userName = await validateToken(req.cookies.token);
        if (!userName) return res.status(403).send("Forbidden action");
        return res.send(userName);
    }
    catch (error) {
        return res.status(401).send("Invalid User");
    }
}

module.exports = isAuthenticated;