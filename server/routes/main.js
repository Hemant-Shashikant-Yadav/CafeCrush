const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {

    const locals =
    {
        title: 'Home Page',
        desciption: 'Welcome to the Home Page '
    }
    res.render('index', { locals });
});
router.get('/about', (req, res) => {
    res.render('about');
});

// router.get('', (req, res) => {
//     res.send('Hello World!');
// });


router.get('/test-db-connection', async (req, res) => {
    try {
        const client = await connectToMongoDB();
        // Perform a simple query to test the connection
        const db = client.db('CafeCrush'); // Replace 'yourDatabaseName' with your actual database name
        const collections = await db.listCollections().toArray();
        res.json({ message: 'Connected to MongoDB', collections });
    } catch (error) {
        res.status(500).json({ message: 'Failed to connect to MongoDB', error: error.message });
    }
});

module.exports = router;