const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model {}

Song.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        artist: {
            type: DataTypes.STRING,
        },
        album: {
            type: DataTypes.STRING,
        },
        img: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song',
    }
);

module.exports = Song;