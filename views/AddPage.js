var AbstractPage=require('./AbstractPage')
class AddPage extends AbstractPage{
	constructor(errors) {
	  super()
	  this.errors=errors||{}
	}
	_render(){
		var titleError=this.errors.title||''
		var contentError=this.errors.content||''
		return `
			<form method='post' action='/add'>
			  <div class="form-group">
			    <label for="title">标题</label>
			    <input type="text" class="form-control" name='title' id="title" placeholder="标题">
			    <p class='text-danger'>${titleError}</p>
			  </div>
			  <div class="form-group">
			    <label for="content">内容</label>
			    <input type="text" class="form-control" name='content' id="content" placeholder="内容">
			    <p class='text-danger'>${contentError}</p>
			  </div>
			  <button type="submit" class="btn btn-default">提交</button>
			  <a href='/' class="btn btn-default">返回</a>
			</form>
		`
	}
	
}
module.exports=AddPage