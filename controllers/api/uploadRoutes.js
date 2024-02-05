const router = require('express').Router();
const { Song, Playlist } = require('../../models');

/*
/songs POST
/playlists POST
*/

router.post('/song', async (req, res) => {
    try{
        console.log("Uploading!");
        const songData = await Song.create(req.body);
        res.status(200).json(songData);
    }catch(err){
        res.status(500).json(err);
    }
})


router.post('/playlist', async (req, res) => {
    try{
        console.log("Uploading!");
        const playlistData = await Playlist.create(req.body);
        res.status(200).json(playlistData);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
