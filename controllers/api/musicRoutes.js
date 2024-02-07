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
        const playlistData = await Playlist.create({play_name:req.body.play_name});
        const songs = req.body.songs;
        const playlist_id = playlistData.id
        for (const song_id of songs){
            PlaylistSongs.create({playlist_id, song_id})
        }
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
});


module.exports = router;
