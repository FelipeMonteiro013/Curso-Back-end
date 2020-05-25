'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      class_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'classes',key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:'employee', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      dt_nasc:{
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('students');
  }
};
