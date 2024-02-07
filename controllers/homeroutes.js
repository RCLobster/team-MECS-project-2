const router = require('express').Router();
const { User, Playlist, Song, PlaylistSongs } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    if(req.session.logged_in){
        res.redirect('/profile');
        return;
    }else{
        res.render('homepage'); 
    }
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
            ...user,
            logged_in: req.session.logged_in
        });

    }catch (err){
        res.status(500).json(err);
    }
})

// /songs FIND ALL SONGS IN DB
router.get('/songs', async (req, res) => {
    try {
        const songData = await Song.findAll({
            order: [['title', 'ASC']],
        });

        const songs = songData.map(sg => sg.get({ plain: true }));
        //res.status(200).json(songData);
        
        res.render('songs', {
            songs,
            logged_in: req.session.logged_in
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
            playlists,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/createplaylists', async (req, res) => {
    try {
        const songData = await Song.findAll({
            order: [['title', 'ASC']],
        });

        const songs = songData.map(sg => sg.get({ plain: true }));
        //res.status(200).json(songData);
        
        res.render('createplaylist', {
            songs,
            logged_in: req.session.logged_in
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
