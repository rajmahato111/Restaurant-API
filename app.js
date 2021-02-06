const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send(`Hello`);
})

app.use('/api/users', require('./routes/users'));
app.use('/api/manager', require('./routes/manager'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/authmanager', require('./routes/authmanager'));
app.use('/api/manager-routes', require('./routes/manager-routes'));
app.use('/api/user-routes', require('./routes/user-routes'));
app.use('/api/manager-dish', require('./routes/manager-dish'));
app.use('/api/dish-detail', require('./routes/dish-detail'));
//Listening to server
app.listen(3000, err => {
    console.log(`Listening to port 3000...`);
});