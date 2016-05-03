var url=require('url')
var qs=require('querystring')
module.exports=function(req){
	var query=url.parse(req.url).query
	var queryJson=qs.parse(query)
	return queryJson.id
}