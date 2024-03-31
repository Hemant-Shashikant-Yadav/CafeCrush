require('dotenv').config();
const server = require('./api/server'); 

const PORT = process.env.PORT || 3000;

console.log(`Server is running on port ${PORT}`);
