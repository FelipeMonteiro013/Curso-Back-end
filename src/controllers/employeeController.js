const Employee = require('../models/Employee.js');

module.exports = {
    async login(req, res){
        const {user,password} = req.body;
        const employees = await Employee.findOne({
            where:{user,password},
        }); 

        if(!employees){
            res.status(400).json({error:'User or password is invalid, try again!'});
        }

        return res.json(employees);  
    }
}