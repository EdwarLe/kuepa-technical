import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    role: {
        type: DataTypes.ENUM('student', 'moderator'),
        allowNull: false
    },
});

