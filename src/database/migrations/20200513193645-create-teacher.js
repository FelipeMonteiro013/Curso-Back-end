'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('teachers', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      employee_id:{
        type: Sequelize.INTEGER,
        references:{model:'employee', key:'id'},
        allowNull:false,
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
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
    return queryInterface.dropTable('teachers');
  }
};
