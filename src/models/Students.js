const { Model, DataTypes } = require('sequelize');

class Student extends Model{
    static init(sequelize){
        super.init({
           name: DataTypes.STRING,
           dt_nasc: DataTypes.DATEONLY 
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Class, {foreignKey:'class_id', as: 'class'})
        this.belongsTo(models.Employee, {foreignKey:'employee_id', as: 'employee'})
    }
}

module.exports = Student;