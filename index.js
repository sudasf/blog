var database=require('./database')
var addContent={
	name:'sfff',
	age:200,
}
database.add(addContent)
console.log(database.get()[0].name)