const mongoose = require('mongoose')


const schema = mongoose.Schema;
// 
const userSchema = new mongoose.Schema({
    rollno: { type: String, required: true },
    name: { type: String, required: true },
    contactNumber: { type: String, required: true }
});

const User = mongoose.model('headline', userSchema, 'headline'); // Specify collection name

module.exports = User;