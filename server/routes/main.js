const express = require('express');
const router = express.Router();
const connectToMongoDB = require('../config/db1');
const connectDB = require('../config/db');
const User = require('../models/Post');


router.get('/', (req, res) => {

    const locals =
    {
        title: 'Cafe Crush',
        desciption: 'Welcome to the Home Page '
    }
    res.render('index', { locals });
});
router.get('/about', (req, res) => {
    res.render('about');
});

router.post('/submit', async (req, res) => {
    const { rollno, name, contact } = req.body;
    try {
        await connectDB(); // Connect to MongoDB
        const newUser = new User({ rollno, name, contactNumber: contact });
        const savedUser = await newUser.save();
        console.log('User saved:', savedUser);
        // res.send('User saved successfully!');
        res.render('index');

    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('Error saving user!');
    }

});


router.get('/test-db-connection', async (req, res) => {
    try {
        const client = await connectToMongoDB();
        const db = client.db('CafeCrushDB'); // Replace 'CafeCrush' with your actual database name
        const collections = await db.listCollections().toArray();
        res.json({ message: 'Connected to MongoDB', collections });
    } catch (error) {
        res.status(500).json({ message: 'Failed to connect to MongoDB', error: error.message });
    }
});

module.exports = router;