'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('employee', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        user:{
          type:Sequelize.STRING,
          allowNull:false
        },
        password:{
          type:Sequelize.STRING,
          allowNull:false
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull:false
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull:false
        }
      });
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('employee');
  }
};