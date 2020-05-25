const { Model, DataTypes} = require('sequelize');

class Class extends Model{
    static init(sequelize){
        super.init({
            start_at: DataTypes.TIME,
            name: DataTypes.STRING,
            day: DataTypes.STRING,
            start_at: DataTypes.TIME,
            end_at: DataTypes.TIME,
            limit: DataTypes.INTEGER
        },{
            sequelize
        });
    }
    static associate(models){
        this.belongsTo(models.Teacher, {foreignKey:'teacher_id', as:'teacher'});
        this.belongsTo(models.Course, {foreignKey:'course_id', as:'course'});
        this.belongsTo(models.Employee, {foreignKey:'employee_id', as:'employee'});
    }
}

module.exports = Class;