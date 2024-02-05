const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render('homepage');
});

// /profile GET


module.exports = router;
