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



module.exports = router;
