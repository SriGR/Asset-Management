const db = require('../index');
const Asset = db.Asset;

exports.stockView = async (req, res) => {
    try {
        const availableAssets = await Asset.findAll({
            where: { status: 'Available' },
        });
        const branchTotals = availableAssets.reduce((acc, asset) => {
            const branchName = asset.branchName;
            console.log("Current asset:", asset);
            console.log("Current branch:", branchName);

            if (!acc[branchName]) {
                console.log("Initializing branch:", branchName);
                acc[branchName] = { totalCount: 1, totalValue: parseFloat(asset.purchaseAmount) };
            } else {
                acc[branchName].totalCount += 1;
                acc[branchName].totalValue += parseFloat(asset.purchaseAmount);
            }
            return acc;
        }, {});
        res.render('stockView/View', { availableAssets, branchTotals });
    } catch (error) {
        console.error('Error fetching stock:', error);
        res.status(500).send('Server Error');
    }
};