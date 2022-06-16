const Employee = require("../lib/Employee")

test ("can make object",() => {
    const employee = new Employee("Jimmy","345", "jimmy@345.com");
    expect(typeof(employee)).toBe("object");
})

test ("can set name",() => {
    const employee = new Employee("Jimmy","345", "jimmy@345.com");
    expect(employee.name).toBe("Jimmy");
})

test ("can set id",() => {
    const employee = new Employee("Jimmy","345", "jimmy@345.com");
    expect(employee.id).toBe("345");
})

test ("can set email",() => {
    const employee = new Employee("Jimmy","345", "jimmy@345.com");
    expect(employee.email).toBe("jimmy@345.com");
})

test ("can get name",() => {
    const employee = new Employee("Jimmy","345", "jimmy@345.com");
    expect(employee.getName()).toBe("Jimmy");
})

test ("can get id",() => {
    const employee = new Employee("Jimmy","345", "jimmy@345.com");
    expect(employee.getId()).toBe("345");
})

test ("can get email",() => {
    const employee = new Employee("Jimmy","345", "jimmy@345.com");
    expect(employee.getEmail()).toBe("jimmy@345.com");
})

test ("can get role",() => {
    const employee = new Employee("Jimmy","345", "jimmy@345.com");
    expect(employee.getRole()).toBe("Employee");
})
