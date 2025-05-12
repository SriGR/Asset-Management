const db = require('../index');
const Employee = db.Employee;

exports.list = async (req, res) => {
    const employees = await Employee.findAll();
    res.render('employee/employeeList', { employees });
};

exports.addForm = (req, res) => {
    res.render('employee/employeeForm');
};

exports.add = async (req, res) => {
    const { employeeName, branch } = req.body;
    await Employee.create({
        employeeName,
        branch
    });
    res.redirect('/employees');
};

exports.editForm = async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    res.render('employee/employeeEdit', { employee });
};

exports.edit = async (req, res) => {
    const { employeeName, branch } = req.body;
    await Employee.update(
        { employeeName, branch },
        { where: { id: req.params.id } }
    );
    res.redirect('/employees');
};