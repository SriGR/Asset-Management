module.exports = (sequelize, DataTypes) => {
    const Asset = sequelize.define('Asset', {
        assetName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assetNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        purchaseAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        branchName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'Available',
        },
        assetCondition: {
            type: DataTypes.STRING,
            defaultValue: 'New',
        },
        assignedTo: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Employees',
                key: 'id',
            },
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'AssetCategories',
                key: 'id',
            },
        },
        returnReason: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isScrapped: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });

    Asset.associate = (models) => {
        Asset.belongsTo(models.AssetCategory, { foreignKey: 'categoryId' });
        Asset.belongsTo(models.Employee, { foreignKey: 'assignedTo' });
    };

    return Asset;
};