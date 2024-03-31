require('dotenv').config();
const path = require('path');

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('../server/config/db');

const app = express();


connectDB();


app.use(expressLayout);
app.set('views', path.join(__dirname, '..', 'views'));


app.set('layout', '../views/layout/main');
app.set('view engine', 'ejs');

app.use('/', require('../server/routes/main'));


app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = (req, res) => {
    app(req, res);
};

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}