const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PlaylistSongs extends Model {}

PlaylistSongs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        playlist_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'playlist',
                key: 'id',
            },
        },
        song_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'song',
                key: 'id',
            },
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'playlistsongs',
    }
);

module.exports = PlaylistSongs;