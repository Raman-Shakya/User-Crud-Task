const express = require('express');
const userRoutes = require('./user/routes/route');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(userRoutes);

app.listen(PORT, (e) => {
    console.log("server started at", PORT);
})
