const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async(req, res) => {
    res.render('homepage');
});

// /profile GET


module.exports = router;
