const userModel = require('../model/model');
const { signToken, validateToken } = require('../tools');

// get all user records
const getUsers = (req, res) => {
    userModel.find()
        .then((r) => res.send(r))
        .catch((e) => res.status(404).send("Data not found" + e));
}

// to login and get jwt token
const login = (req, res) => {
    const { userName, password } = req.body;

    userModel.find({ userName, password })
        .then((response) => {
            if (response.length == 0) return res.status(403).send("Forbidden action");
            // user has been authorized
            res.send(`loginToken=${signToken(response[0].userName)}; path=/; SameSite=Lax; `);
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
        .then((r) => res.json(r))
        .catch((e) => res.status(403).send("Error" + e));
}

// update password for given user
const changePassword = (req, res) => {
    const { userName, oldPassword, newPassword } = req.body;
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