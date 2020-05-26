const Course = require('../models/Courses.js');
const Employee = require('../models/Employee');


module.exports = {
    async index(req,res){

        const course = await Course.findAll({});
        return res.json(course);
    },

    async store(req, res){
        // const employee_id = req.headers.authorization;
        
        const { name, description, employee_id } = req.body;
        

        // const employee = await Employee.findByPk(employee_id);

        // if(!employee){
        //     res.status(400).json({error:'Employee not found'});
        // }

        const course = await Course.create({name, description, employee_id})

        return res.json(course);
    },

    async delete(req,res){
        const employee_id = req.headers.authorization;
        const {course_id} = req.params;

        const employee = await Employee.findByPk(employee_id);

        if(!employee){
            res.status(400).json({error:'Employee not found'});
        }

        await Course.destroy({where:{
            id: course_id
        }})

        return res.send(`Curso deletado!`);
    },
    async update(req,res){
        const employee_id = req.headers.authorization;
        const {course_id} = req.params;
        const {name,description} = req.body;

        const employee = await Employee.findByPk(employee_id);

        if(!employee){
            res.status(400).json({error:'Employee not foud'});
        }

        await Course.update({name,description},{
            where:{
                id: course_id
            } 
        })
        return res.send('Curso Atualizado!');
    }, 
    async showOne(req,res){
        const {course_id} = req.params;
        const course = await Course.findByPk(course_id);

        return res.json(course);
        
    }
}