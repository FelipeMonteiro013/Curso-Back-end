const Sequelize = require('sequelize');
const dbConfig = require("../config/database");

const Employee = require('../models/Employee');
const Course = require('../models/Courses');
const Teacher = require('../models/Teachers');
const Classes = require('../models/Classes');
const Students = require('../models/Students');

const connection = new Sequelize(dbConfig);

Employee.init(connection);
Course.init(connection);
Teacher.init(connection);
Classes.init(connection);
Students.init(connection);

Course.associate(connection.models);
Teacher.associate(connection.models);
Classes.associate(connection.models);
Students.associate(connection.models);

module.exports = connection;
