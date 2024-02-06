const router = require('express').Router();
const { Song, Playlist, PlaylistSongs } = require('../../models');

/*
/songs POST
/playlists POST
*/

router.post('/song', async (req, res) => {
    try {
        console.log("Uploading!");
        const songData = await Song.create(req.body);
        res.status(200).json(songData);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.post('/playlist', async (req, res) => {
    try {
        console.log("Uploading!");
        const playlistData = await Playlist.create(req.body);
        /*
                for loop (Song.id){
                    for each Song.id{
                        PlaylistSongs.create(playlistData.id, Song.id)
                    }
                }
        
                have a button on a js add button, this button pushes the id of associated song to an array
                have a CREATE PLAYLIST button, this button sends the array of id's to this post request route 
        */

        res.status(200).json(playlistData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
