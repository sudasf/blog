var fs=require('fs')
const filepath=__dirname+'/data.json'

var list
try{
	list=fs.readFileSync(filepath).toString()
	list=JSON.parse(list)
}catch(e){
	//console.log(e)
	list=[]
}

module.exports={
	
	add(article){
		list.push(article)
		this.store()
	},
	update(index,newArticle){
		list.splice(index,1,newArticle)
		this.store()
		//list[index]=newArticle
	},
	delete(index){
		list.splice(index,1)
		this.store()
	},
	get(){
		return list
	},
	getOne(id){
		return list[id]
	},
	store(){
		fs.writeFile(filepath,JSON.stringify(list),(err)=>{
			if(err) throw err;
			//callback();
			//console.log('act success')
		})
	},
}