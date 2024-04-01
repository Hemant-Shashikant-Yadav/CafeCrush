const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(URI);
        console.log(`Connected to MongoDB :${conn.connection.host}`);

    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;