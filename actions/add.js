var database=require('../database')
var AddPage=require('../views/AddPage')
var post=require('./post')
var indexPage=require('../views/indexPage')
var redirect=require('./redirect')

module.exports=function(req,res){
	
	if(req.method==='GET'){
		res.end(new AddPage().render())
	}else{
		post(req).then((value)=>{
			var errors={}
			if(!(value.title&&value.title.length>5)){
				errors.title='标题必须大于5个字符'
			}
			if(!(value.content&&value.content.length>10)){
				errors.content='标题必须大于10个字符'
			}
			if(Object.keys(errors).length>0){
				res.end(new AddPage(errors).render())
			}else{
				database.add(value)
				redirect(res,'http://127.0.0.1:3000')
			}
			
		})
		
	}
	
}