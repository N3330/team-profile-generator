const Intern  = require('../lib/Intern')

test ("can get role",() => {
    const intern = new Intern("Jimmy","345", "jimmy@345.com", "School");
    expect(intern.getRole()).toBe("Intern");
})

test ("can get School",() => {
    const intern = new Intern("Jimmy","345", "jimmy@345.com", "School");
    expect(intern.getSchool()).toBe("School");
})

test ("can set School",() => {
    const intern = new Intern("Jimmy","345", "jimmy@345.com", "School");
    expect(intern.school).toBe("School")
})