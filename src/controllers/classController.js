const Turma = require('../models/Classes');

module.exports = {
    async store(req,res){
        const employee_id = req.headers.authorization;
        const {course_id} = req.params;
        
        const {name, day, start_at, end_at, limit, teacher_id,} = req.body;
        
        const turma = await Turma.create({name, day, start_at, end_at, limit, teacher_id,course_id,employee_id});

        return res.json(turma);
    },

    async index(req,res){
        const employee_id = req.headers.authorization;
        const {course_id} = req.params;
        
        const turma = await Turma.findAll({where:{
            course_id: course_id
        }});

        return res.json(turma);
    },

    async delete(req,res){
        const {course_id,class_id} = req.params;

        console.log(course_id);
        
        const turma = await Turma.destroy({where:{
            id: class_id
        }})

        return(res.send('Deletado'));
    },

    async update(req,res){
        const employee_id = req.headers.authorization;
        const {course_id,class_id} = req.params;
        
        const {name, day, start_at, end_at, limit, teacher_id,} = req.body;
        
        const turma = await Turma.update({name, day, start_at, end_at, limit, teacher_id,course_id,},{
            where:{
                id: class_id
            }
        });

        return res.send('Course Updated!');
    }
}