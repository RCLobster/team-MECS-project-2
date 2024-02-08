const router = require('express').Router();
const { Song, Playlist, User, PlaylistSongs } = require('../../models');

router.post('/addsong', async(req, res) => {
    try{
        const songToAdd = await Song.create(req.body);
        res.status(200).json({message: "Song uploaded successfuly!"});
    }catch(err){
        res.status(500).json(err);
    }
});

router.post('/playlist', async (req, res) => {
    try {
        console.log("Uploading!");
        const playlistData = await Playlist.create({play_name:req.body.play_name, user_id: req.session.user_id});
        const songs = req.body.songs;
        const playlist_id = playlistData.id
        for (const song_id of songs){
            PlaylistSongs.create({playlist_id, song_id})
        }
        res.status(200).json(playlistData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
