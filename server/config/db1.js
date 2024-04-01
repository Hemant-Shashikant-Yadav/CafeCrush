import { MongoClient } from 'mongodb';

const URI = process.env.MONGODB_URI

const connectToMongoDB = async () => {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(URI);
    console.log(`Connected to MongoDB :${conn.connection.host}`);

    const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
} 
