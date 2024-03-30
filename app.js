require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.static('public'));

app.use(expressLayout)
app.set('layout', './layout/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

