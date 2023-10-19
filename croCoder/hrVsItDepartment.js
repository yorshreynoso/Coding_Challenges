/**
 * You are given an array of objects representing a collection of employees, each with a name, salary, and department. 
 * Your task is to use map, filter, and reduce to calculate the average salary for each department 
 * and then return an array of objects containing only the departments that have an average salary above 65000.
 * 
 * input:
 * const employees = [
        { name: "John", salary: 50000, department: "IT" },
        { name: "Jane", salary: 60000, department: "HR" },
        { name: "Bob", salary: 55000, department: "IT" },
        { name: "Sophie", salary: 75000, department: "HR" },
        { name: "Mike", salary: 65000, department: "IT" },
        { name: "Emily", salary: 80000, department: "HR" },
        { name: "David", salary: 70000, department: "IT" },
    ];

    Result:
    [
        { department: 'HR', average: 71666 }
    ];

    hint:
    
    Array.prototype.reduce()
    Array.prototype.push()
    Array.prototype.keys()
    Array.prototype.map()
    Array.prototype.filter()

*/

const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
];


const employeesByDepartment = employees.reduce((acc, employee) => {
    const department = employee.department;
    if(!acc[department]) {
        acc[department] = [];
    }

    acc[department].push(employee);
    return acc;
}, {});

// console.log(employeesByDepartment)

const averageByDepartment = Object.keys(employeesByDepartment).map(department => {
    const sum = employeesByDepartment[department].reduce((acc, employee) => {
        
        return acc + employee.salary;
    }, 0);
    
    return { department:department, average: sum / employeesByDepartment[department].length }

});

const departmentFilter = averageByDepartment.filter(department => department.average > 65000 );

console.log(departmentFilter);
