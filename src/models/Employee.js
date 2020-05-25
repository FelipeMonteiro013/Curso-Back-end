const { Model, DataTypes } = require('sequelize');

class Employee extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            user: DataTypes.STRING,
            password: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'employee'
        });
    } 
    
}

module.exports = Employee;