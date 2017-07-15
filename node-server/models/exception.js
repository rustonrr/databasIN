module.exports = (sequelize, DataTypes) => {
    let Exception = sequelize.define('exception', {
        account_number: {
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
        account_open_date: {
            type: DataTypes.DATE
        },
        created_on: {
            type: DataTypes.DATE
        },
        reviewed_on: {
            type: DataTypes.DATE
        },
        resolution: {
            type: DataTypes.STRING
        }
    });
    return Exception;
}
