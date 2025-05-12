require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./index');
const port = process.env.PORT || 5000;

const employeeRoutes = require('./routes/employeeRoutes');
const assetRoutes = require('./routes/assetRoutes')
const assetCategoryRoutes = require('./routes/assetCategoryRoutes');
const stockViewRoutes = require('./routes/stockViewRoutes');
const assetHistoryRoutes = require('./routes/assetHistoryRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/employees', employeeRoutes);
app.use('/assets', assetRoutes);
app.use('/assetCategories', assetCategoryRoutes);
app.use('/assetHistory', assetHistoryRoutes);
app.use('/stockViewRoutes', stockViewRoutes);
app.get('/', stockViewRoutes);

app.set('view engine', 'pug');
app.set('views', './views');

db.sequelize.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });

app.listen(port, () => {
    console.log(`App running on ${port}`);
});