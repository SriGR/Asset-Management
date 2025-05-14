const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'postgresql://postgres:Sree%409080427619@db.boygjjcqhnhnwwscpfup.supabase.co:5432/postgres',
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
