const Teacher= require('../models/Teachers');
const Employee = require('../models/Employee');

module.exports = {
    async store(req,res){
        const employee_id = req.headers.authorization;
        const {name} = req.body;

        const employee = await Employee.findByPk(employee_id);

        if(!employee){
            res.status(400).json({error:'Employee not found'});
        }

        const teacher = await Teacher.create({name,employee_id})
        return res.json(teacher);
    },

    async index(req,res){
        const employee_id = req.headers.authorization;     
        
        const employe = await Employee.findByPk(employee_id);

        if(!employe){
            res.status(400).json({error:"Employee not foud"})
        }

        const professores = await Teacher.findAll();

        return res.json(professores);
    },

    async delete(req,res){
        const employee_id = req.headers.authorization;
        const {teacher_id} = req.params;

        const employee = await Employee.findByPk(employee_id);

        if(!employee){
            res.status(400).json({error:'Employee not found'})
        }

        const teacher = await Teacher.destroy({where:{id:teacher_id}})
        
        if(!teacher){
            res.status(400).json({error:'Teacher cannot to be deleted'})
        }
        
        return res.send(`Teacher deteted !`);
    },
    async update(req,res){
        const employee_id = req.headers.authorization;
        const {teacher_id} = req.params;
        const {name} = req.body;

        const employee = await Employee.findByPk(employee_id);

        if(!employee){
            res.status(400).json({error:'Employee not found'});
        }
        
        const teacher = await Teacher.update({name},{
            where:{
                id:teacher_id
            }
        })
        
        return res.send('Teacher updated !');
    }
}