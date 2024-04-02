const express = require('express');

require('dotenv').config();
const app = require('./api/server'); // Adjust the path as necessary

const PORT = process.env.PORT || 3000;

// console.log(`Server is running on port ${PORT}`);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
