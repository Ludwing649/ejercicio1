//Utils
const { db, DateTypes } = require('..utils/database.util');
const Registration = db.define('registration', {

    id: {
        primarykey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    entranceTime: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'working'
    },

});

module.exports = { Registration };


