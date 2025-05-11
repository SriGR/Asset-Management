const Sequelize = require('sequelize');
const sequelize = require('./db');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Employee = require('./models/employee')(sequelize, Sequelize.DataTypes);
db.AssetCategory = require('./models/assetCategory')(sequelize, Sequelize.DataTypes);
db.Asset = require('./models/asset')(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;