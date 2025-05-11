module.exports = (sequelize, DataTypes) => {
    const AssetCategory = sequelize.define('AssetCategory', {
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    });

    AssetCategory.associate = (models) => {
        AssetCategory.hasMany(models.Asset, { foreignKey: 'categoryId' });
    };

    return AssetCategory;
};