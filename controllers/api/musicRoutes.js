const router = require('express').Router();
const { Song, Playlist } = require('../../models');

/*
/songs GET
/playlists GET
*/

// /api/music/songs FIND ALL SONGS IN DB
router.get('/songs', async (req, res) =>{
    try{
        const songData = await Song.findAll();

        //const songs = songData.get({ plain: true });
        res.status(200).json(songData);
        /*
        res.render('songs', {
            songs;
        });
        */
    }catch(err){
        res.status(500).json(err);
    }
});

// /api/music/playlists
router.get('/playlists', async (req, res) =>{
    try{
        const playlistData = await Playlist.findAll();

        //const playlist = playlistData.get({ plain: true });
        res.status(200).json(playlistData);
        /*
        res.render('playlist', {
            playlist;
        });
        */
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
