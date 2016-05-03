var database=require('../database')
var indexPage=require('../views/indexPage')
module.exports=function(req,res){
	var list=database.get()
	
	res.end(new indexPage(list).render())
}