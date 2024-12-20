const userModel = require('../model/model');
const { signToken, validateToken } = require('../jwtTools');

// get all user records
const getUsers = async (req, res) => {
    if (!req.cookies.token) return res.status(401).send("Unauthorized access");
    var userName;
    try {
        userName = await validateToken(req.cookies.token);
        if (!userName) return res.status(403).send("Forbidden action");
    }
    catch (error) {
        return res.status(401).send("Invalid User");
    }
    
    userModel.find({}, 'userName')
        .then((r) => {
            if (r.map((record) => record.userName).includes(userName))
                return res.send({ data: r, currentUser: userName })
            res.cookie("token", "", {
                path: '/',
                maxAge: 3600000,
                sameSite: "None",
                httpOnly: true,
                secure: true
            });
            res.status(401).send("Invalid User");
        })
        .catch((e) => res.status(404).send("Data not found" + e));
}

// to login and get jwt token
const login = (req, res) => {
    const { userName, password } = req.body;

    userModel.find({ userName, password })
        .then((response) => {
            if (response.length == 0) return res.status(403).send("Forbidden action");
            // user has been authorized
            const token = signToken(response[0].userName);
            res.cookie("token", token, {
                path: '/',
                maxAge: 3600000,
                sameSite: "None",
                httpOnly: true,
                secure: true
            });
            // res.send(`loginToken=${signToken(response[0].userName)}; path=/; `);
            res.send("auth cookie sent");
        })
        .catch((err) => {
            console.log(err);
            res.status(403).send("Forbidden action")
        });
}

// create new user
const addUser = (req, res) => {
    const { userName, password } = req.body;
    userModel.create({
        userName,
        password
    })
        .then((response) => {
            if (Object.keys(response).length == 0) return res.status(403).send("Forbidden action");
            // user has been authorized
            const token = signToken(userName);
            res.cookie("token", token, {
                path: '/',
                maxAge: 3600000,
                sameSite: "None",
                httpOnly: true,
                secure: true
            });
            res.json(response);
        })
        .catch((e) => res.status(403).send("Error" + e));
}

// update password for given user
const changePassword = async (req, res) => {
    if (!req.cookies.token) return res.status(401).send("Unauthorized access");
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword) || (oldPassword == newPassword))
        return res.status(401).send("Incomplete Informations");

    var userName;
    try {
        userName = await validateToken(req.cookies.token);
        if (!userName) return res.status(403).send("Forbidden action");
    }
    catch (error) {
        return res.status(401).send("Invalid User");
    }

    userModel.updateOne({
        userName: userName,
        password: oldPassword
    }, {
        password: newPassword
    })
        .then((r) => res.json(r))
        .catch((e) => res.status(403).send("Forbidden action"));
}

// delete user
const deleteUser = (req, res) => {
    const { userName, password } = req.body;
    userModel.deleteOne({
        userName: userName,
        password: password
    })
        .then((r) => res.json(r))
        .catch((e) => res.status(403).send("Forbidden action"));
}

module.exports = [getUsers, login, addUser, changePassword, deleteUser]