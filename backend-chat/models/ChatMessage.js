import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'
import { User } from './User.js'

export const ChatMessage = sequelize.define('ChatMessage', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

ChatMessage.belongsTo(User, { foreignKey: 'userId', as: 'user' });

