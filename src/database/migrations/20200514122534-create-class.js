'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('classes', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull:false,
          autoIncrement:true,
          primaryKey:true
        },
        teacher_id: {
          type: Sequelize.INTEGER,
          allowNull:false,
          references:{model:'teachers', key:'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
        },
        course_id: {
          type: Sequelize.INTEGER,
          allowNull:false,
          references:{model:'courses', key:'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
        },
        employee_id: {
          type: Sequelize.INTEGER,
          allowNull:false,
          references:{model:'employee', key:'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
        },
        name:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        day:{
          type:Sequelize.STRING,
          allowNull:false
        },
        start_at:{
          type:Sequelize.STRING(5),
          allowNull: false
        },
        end_at:{
          type:Sequelize.STRING(5),
          allowNull:false
        },limit:{
          type: Sequelize.INTEGER,
          allowNull: false
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull:false
        }
      });
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('classes');
  }
};
