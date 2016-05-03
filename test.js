var fs=require('fs')
const filepath=__dirname+'/data.json'
var list
try{
	list=fs.readFileSync(filepath).toString()
}catch(e){
	console.log(e)
	list=[]
}
// fs.readFile(filepath, (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
console.log(list)