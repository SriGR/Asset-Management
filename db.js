const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://postgres:Sree@9080427619@db.boygjjcqhnhnwwscpfup.supabase.co:5432/postgres', {
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;