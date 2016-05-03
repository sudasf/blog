var AbstractPage=require('./AbstractPage')
class IndexPage extends AbstractPage{
	constructor(list) {
	  super()
	  this.list=list
	}
	_render(){
		var listStr=this.list.map((val,index)=>`<li>
			<h3>标题：${val.title}</h3>
			<p class='text-success'>内容：${val.content}</p>
			<p><a href='/delete?id=${index}' class='btn btn-primary'>删除 </a>
			<a href='/update?id=${index}' class='btn btn-primary'>修改</a>
			<p>
			</li>`).join('')
		return `
		<div>
			<p><a href='/add' class='btn btn-primary'>新增</a></p>
			<ul class="list-unstyled">
					${listStr}
		       </ul>
		</div>
		`
	}
	
}
module.exports=IndexPage