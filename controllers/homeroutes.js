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
        //res.json(userData);
        res.render('profile', {
            ...user
        });

    }catch (err){
        res.status(500).json(err);
    }
})

// /songs FIND ALL SONGS IN DB
router.get('/songs', async (req, res) => {
    try {
        const songData = await Song.findAll();

        const songs = songData.map(sg => sg.get({ plain: true }));
        //res.status(200).json(songData);
        
        res.render('songs', {
            songs
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

// /playlists
router.get('/playlists', async (req, res) => {
    try {
        const playlistData = await Playlist.findAll({
            include: [{ model: Song, through: PlaylistSongs }, { model: User }]
        });

        const playlists = playlistData.map(pd => pd.get({ plain: true }));
        //res.status(200).json(playlists);

        res.render('playlist', {
            playlists
        });

    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
