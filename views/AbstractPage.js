class AbstractPage{
	constructor() {
	  
	}
	_render(){
		throw new Error('子类没有重写_render方法')
	}
	render(){
		return `
			<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8" />
				<link rel='stylesheet' href='//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css' >
				<link rel='stylesheet' href='//cdn.bootcss.com/font-awesome/4.4.0/css/font-awesome.min.css' >

				<title>myTitle</title>
			</head>
			<body>
				<div class='container'>
					${this._render()}
				</div>
			    
			    
			    <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
			    <script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
			    <script>

			    </script>
			</body>
			
			</html>
		`
	}
}
module.exports=AbstractPage