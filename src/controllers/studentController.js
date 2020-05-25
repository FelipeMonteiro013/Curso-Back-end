const Student = require('../models/Students');

module.exports = {

    async store(req,res){
        const employee_id = req.headers.authorization; 
        const {class_id} = req.params;
        const {name, dt_nasc} = req.body;
        
        
        const student = await Student.create({name, dt_nasc, class_id,employee_id})

        return res.json(student);
    },

    async index(req,res){
        const students = await Student.findAll({});

        return res.json(students);
    },

    async update(req,res){

        const {student_id} = req.params;
        const {name,dt_nasc} = req.body;

        const students = await Student.update({name,dt_nasc},{where:{
            id:student_id
        }})

        return res.send('Student updated!')
    },
    async delete(req,res){
        const {student_id} = req.params;
        const student = await Student.destroy({where:{
            id:student_id
        }})

        return res.send('Student deleted!')
    }


}