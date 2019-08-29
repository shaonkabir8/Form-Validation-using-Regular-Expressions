const faker = require('faker');
const fs = require('fs');


const data = [];

for(var i =0; i<50; i++) {
    const obj = {}
    obj.name = faker.name.findName(),
    obj.email = faker.internet.email(),
    obj.phone = faker.phone.phoneNumber(),
    obj.password = faker.internet.password(),
    obj.id = faker.random.number()

    data.push(obj)
}
console.log(data)

fs.writeFile('db.json',JSON.stringify(data),(err,data) => {
	console.log('data pushed to db.json file successfully........')
})
