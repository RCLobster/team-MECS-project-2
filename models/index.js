const User = require('./User');
const Song = require('./Song');
const Playlist = require('./Playlist');
const PlaylistSongs = require('./PlaylistSongs');

User.hasMany(Playlist, {
  foreignKey: 'user_id'
});

Playlist.belongsTo(User, {
  foreignKey: 'user_id'
});

Playlist.belongsToMany(Song, {
  // Define the third table needed to store the foreign keys
  through: {
    model: PlaylistSongs,
    unique: false
  },
  // Define an alias for when data is retrieved
  // as: 'playlist_songs'
});

Song.belongsToMany(Playlist, {
  // Define the third table needed to store the foreign keys
  through: {
    model: PlaylistSongs,
    unique: false
  },
  // Define an alias for when data is retrieved
  // as: 'songsOnPlaylist'
});

module.exports = { User, Song, Playlist, PlaylistSongs };