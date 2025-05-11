module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        employeeName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        branch: {
            type: DataTypes.STRING,
        }
    });

    // Employee.associate = (models) => {
    //     Employee.hasMany(models.AssetIssue, { foreignKey: 'employeeId' });
    // };

    return Employee;
};