const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {

    const locals =
    {
        title: 'Home Page',
        desciption: 'Welcome to the Home Page '
    }
    res.render('index', {locals});
});
router.get('/about', (req, res) => {
    res.render('about');
});

// router.get('', (req, res) => {
//     res.send('Hello World!');
// });


module.exports = router;