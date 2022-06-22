const Engineer  = require('../lib/Engineer')

test ("can get role",() => {
    const engineer = new Engineer("Jimmy","345", "jimmy@345.com", "github");
    expect(engineer.getRole()).toBe("Engineer");
})

test ("can get Github username",() => {
    const engineer = new Engineer("Jimmy","345", "jimmy@345.com", "github");
    expect(engineer.getGithub()).toBe("github");
})

test ("can set github username",() => {
    const engineer = new Engineer("Jimmy","345", "jimmy@345.com", "github");
    expect(engineer.github).toBe("github");
})