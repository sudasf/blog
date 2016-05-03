var database=require('../database')
var UpdatePage=require('../views/UpdatePage')
var post=require('./post')
var redirect=require('./redirect')
var getId=require('./getId')

module.exports=function(req,res){
	
	if(req.method==='GET'){
		var id=getId(req)
		var article=database.getOne(id)
		res.end(new UpdatePage(id,article).render())
	}else{
		post(req).then((value)=>{
			var errors={}
			var {id,title,content}=value
			//console.log({title,content})
			if(!(value.title&&value.title.length>5)){
				errors.title='标题必须大于5个字符'
			}
			if(!(value.content&&value.content.length>10)){
				errors.content='标题必须大于10个字符'
			}
			if(Object.keys(errors).length>0){

				res.end(new UpdatePage(id,{title,content},errors).render())
			}else{
				
				database.update(id,{title,content})
				redirect(res,'http://127.0.0.1:3000')
			}
			
		})
	}
	
}