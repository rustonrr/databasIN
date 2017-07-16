module.exports = (sequelize, DataTypes) => {
    let Exception = sequelize.define('exception', {
        accountNumber: {
            field: 'account_number',
            type: DataTypes.STRING
        },
        ssn: {
            type: DataTypes.STRING
        },
        branch: {
            type: DataTypes.STRING
        },
        employee: {
            type: DataTypes.STRING
        },
        accountOpenDate: {
            field: 'account_open_date',
            type: DataTypes.DATE
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE
        },
        reviewedOn: {
            field: 'reviewed_on',
            type: DataTypes.DATE
        },
        resolution: {
            type: DataTypes.STRING
        },
        reason: {
            type: DataTypes.STRING
        }
    });
    return Exception;
}
