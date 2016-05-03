var querystring=require('querystring')
module.exports=function(req){
	return new Promise((resolve,reject)=>{
		var data=''

		req.on('data',(chunk)=>{
			data+=chunk
		})
		req.on('end',()=>{
			var json=querystring.parse(data)
			resolve(json)
		})
	})
}