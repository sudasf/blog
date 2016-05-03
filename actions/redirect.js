module.exports=function(res,url){
	res.writeHead(302,{  
                'Location':url  
		});  
	res.end(); 
}