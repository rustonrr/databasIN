module.exports = (sequelize, DataTypes) => {
    let Account = sequelize.define('account', {
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
        }
    });
    return Account;
}
