const express = require('express');
const app = express();

// Your Express app setup goes here

// Example route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Export a handler for Vercel
module.exports = (req, res) => {
    app(req, res);
};
