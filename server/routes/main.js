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
        console.log(1);
        const client = await connectToMongoDB();
        console.log(2);
        // Perform a simple query to test the connection
        const db = client.db('CafeCrush'); // Replace 'yourDatabaseName' with your actual database name
        console.log(3);
        const collections = await db.listCollections().toArray();
        console.log(4);
        res.json({ message: 'Connected to MongoDB', collections });
        console.log(5);
    } catch (error) {
        console.log(6);
        res.status(500).json({ message: 'aaaaa Failed to connect to MongoDB', error: error.message });
        console.log(7);
    }
});

module.exports = router;