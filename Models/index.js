const User = require('./User');
const Song = require('./Song');
const Playlist = require('./Playlist');

User.belongsToMany(Song, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Playlist,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'user_songs'
  });
  
  Song.belongsToMany(User, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Playlist,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'songsOnPlay'
  });

  module.exports = {User, Song, Playlist};