const router = require('express').Router();
const { Song, Playlist, User, PlaylistSongs } = require('../../models');

/*
/songs GET
/playlists GET
*/

// /api/music/songs FIND ALL SONGS IN DB
router.get('/songs', async (req, res) => {
    try {
        const songData = await Song.findAll();

        //const songs = songData.get({ plain: true });
        res.status(200).json(songData);
        /*
        res.render('songs', {
            songs;
        });
        */
    } catch (err) {
        res.status(500).json(err);
    }
});

// /api/music/playlists
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
