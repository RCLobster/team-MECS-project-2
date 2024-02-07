const sequelize = require('../config/connection');
const { User, Song, Playlist, PlaylistSongs } = require('../models');

const userData = require('./userData.json');
const songData = require('./songData.json');
const playlistData = require('./playlistData.json');
const playlistSongData = require('./playlistsongsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true, returning: true
  });
  const songs = await Song.bulkCreate(songData);

  const playlists = await Playlist.bulkCreate(playlistData);

  const playlistSongs = await PlaylistSongs.bulkCreate(playlistSongData);

  process.exit(0);
};

seedDatabase();
