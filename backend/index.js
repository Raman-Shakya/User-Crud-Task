const express = require('express');
const userRoutes = require('./user/routes/route');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/user', userRoutes);


app.listen(PORT, (e) => {
    console.log("server started at", PORT);
})
