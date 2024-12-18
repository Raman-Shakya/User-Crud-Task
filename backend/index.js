const express = require('express');
const userRoutes = require('./user/routes/route')

const app = express();

app.use(express.json());
app.use(userRoutes);

app.listen(3000, (e) => {
    console.log("server started, ", e);
})
