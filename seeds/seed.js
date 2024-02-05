const sequelize = require('../config/connection');
const { User, Song, Playlist } = require('../models');

const userData = require('./userData.json');
const songData = require('./songData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true, returning: true
  });
  const songs = await Song.bulkCreate(songData);

  process.exit(0);
};

seedDatabase();
