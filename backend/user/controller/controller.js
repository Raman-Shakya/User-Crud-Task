const userCollection = require('../model/model');

const getRequest = (req, res) => {
    const { userName, password } = req.query;
    res.send('hello world');
}

const postRequest = (req, res) => {
    const { userName, password } = req.body;
    res.json({
        userName,
        password
    });
}

const putRequest = (req, res) => {
    const { userName, password } = req.body;
    res.send("hello world");
}

const deleteRequest = (req, res) => {
    const { userName, password } = req.body;
    res.send("hello world");
}

module.exports = [getRequest, postRequest, putRequest, deleteRequest]