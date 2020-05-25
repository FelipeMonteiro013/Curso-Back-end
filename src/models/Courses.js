const { Model, DataTypes} = require('sequelize');

class Course extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING
        },{
            sequelize
        });
    }
    static associate(models){
        this.belongsTo(models.Employee, {foreignKey: 'employee_id', as:'employee'})
    }
}

module.exports = Course;