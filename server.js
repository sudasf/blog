var http=require('http')
var url=require('url')
var fs=require('fs')
var handles={}
handles['/add']=require('./actions/add')
handles['/delete']=require('./actions/delete')
handles['/update']=require('./actions/update')
handles['/']=require('./actions/index')
http.createServer((req,res)=>{
	var path=url.parse(req.url).pathname
	var handle=handles[path]
	//console.log(path)
	if(handle){
		res.writeHead(200,{'Content-Type': 'text/html'})
		handle(req,res)
	}else{
		res.writeHead(404,{'Content-Type': 'text/html;charset=utf8'})
		// var html=fs.readFileSync('./show.html')
		// console.log(html)
		res.end('网址不存在')
	}
}).listen(3000)
