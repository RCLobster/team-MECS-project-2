const router = require('express').Router();
const { User, Playlist, Song, PlaylistSongs } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [{
                model: Playlist,
                include: [{ model: Song, through: PlaylistSongs }]
            }]
        });

        const user = userData.get({ plain: true });
        // res.json({...user});
        res.render('profile', {
            ...user
        });

    }catch (err){
        res.status(500).json(err);
    }
})


module.exports = router;
