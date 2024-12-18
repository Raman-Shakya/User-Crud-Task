const userModel = require('../model/model');

// get all user records
const getRequest = (req, res) => {
    userModel.find()
        .then((r) => res.send(r))
        .catch((e) => res.status(404).send("Data not found" + e));
}

// create new user
const postRequest = (req, res) => {
    const { userName, password } = req.body;
    userModel.create({
        userName,
        password
    })
        .then((r) => res.json(r))
        .catch((e) => res.status(403).send("Error" + e));
}

// update password for given user
const putRequest = (req, res) => {
    const { userName, password } = req.body;
    userModel.updateOne({
        userName: userName
    }, {
        password: password
    })
        .then((r) => res.json(r))
        .catch((e) => res.status(403).send("Forbidden action"));
}

// delete user
const deleteRequest = (req, res) => {
    const { userName, password } = req.body;
    userModel.deleteOne({
        userName: userName,
        password: password
    })
        .then((r) => res.json(r))
        .catch((e) => res.status(403).send("Forbidden action"));
}

module.exports = [getRequest, postRequest, putRequest, deleteRequest]