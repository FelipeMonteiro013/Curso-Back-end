const { Model, DataTypes } = require('sequelize');

class Teacher extends Model {
    static init(sequelize){
        super.init({
           name: DataTypes.STRING
        },{
            sequelize
        });
    }
    static associate(models){
        this.belongsTo(models.Employee, {foreignKey:'employee_id', as: 'employee'})
    }
}

module.exports = Teacher;