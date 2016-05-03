var database=require('../database')
var redirect=require('./redirect')
var post=require('./post')
var getId=require('./getId')

module.exports=function(req,res){
	
	if(req.method==='GET'){
		var id=getId(req)
		database.delete(id)
		redirect(res,'http://127.0.0.1:3000')
	}
	
}