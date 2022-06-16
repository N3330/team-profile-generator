const Manager = require('../lib/Manager')

test ("can get role",() => {
    const manager = new Manager("Jimmy","345", "jimmy@345.com", "officeNumber");
    expect(manager.getRole()).toBe("Manager");
})

test ("can get Office Number",() => {
    const manager = new Manager("Jimmy","345", "jimmy@345.com", "officeNumber");
    expect(manager.getOfficeNumber()).toBe("officeNumber");
})

test ("can set office Number",() => {
    const manager = new Manager("Jimmy","345", "jimmy@345.com", "officeNumber");
    expect(manager.officeNumber).toBe("officeNumber");
})

