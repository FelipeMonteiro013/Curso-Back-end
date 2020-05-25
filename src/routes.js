const express = require('express');
const EmployeeController = require('./controllers/employeeController');
const CourseController = require('./controllers/courseController');
const TeacherController = require('./controllers/teacherController');
const TurmaController = require('./controllers/classController');
const StudentController = require('./controllers/studentController');

const routes = express.Router();

routes.post('/', EmployeeController.login),

//Curso
routes.get('/cursos',CourseController.index),
routes.post('/cursos', CourseController.store),
routes.delete('/cursos/:course_id', CourseController.delete),
routes.put('/cursos/:course_id', CourseController.update),

//Professor
routes.get('/professores',TeacherController.index),
routes.post('/professores',TeacherController.store),
routes.delete('/professores/:teacher_id',TeacherController.delete),
routes.put('/professores/:teacher_id',TeacherController.update),

//Turmas
routes.post('/:course_id/turmas',TurmaController.store);
routes.get('/:course_id/turmas',TurmaController.index);
routes.delete('/:course_id/turmas/:class_id',TurmaController.delete);
routes.put('/:course_id/turmas/:class_id',TurmaController.update);

//Alunos
routes.post('/:class_id/alunos', StudentController.store);
routes.get('/alunos',StudentController.index);
routes.put('/alunos/:student_id',StudentController.update);
routes.delete('/alunos/:student_id',StudentController.delete);

module.exports = routes;