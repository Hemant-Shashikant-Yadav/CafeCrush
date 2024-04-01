// db1.js
const { MongoClient } = require('mongodb');

const URI = process.env.MONGODB_URI;

const connectToMongoDB = async () => {
    const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

module.exports = connectToMongoDB;
