function changeps(a){
	var div = a.parentNode;
	var ps = prompt("请输入备注");
	if(ps!=null&&ps!=""){
		div.innerHTML="<a class=\"btn btn-link\" onclick=\"changeps(this)\"> 备注：</a>"+ps;
		div.setAttribute("title",ps);		
	}
}

function change_orders(name){
	document.getElementById('myframe').setAttribute('src',name+'_orders.html');
	var location = document.getElementById('location');
	if (name=='unsend') 
		location.innerHTML='未发货订单';
	else if(name=='sending')
		location.innerHTML='已发货订单';
	else if(name=='finished')
		location.innerHTML='已完成订单';
	else if (name=='canceled')
		location.innerHTML='失效订单';
	else{
		location.innerHTML='所有订单';
		document.getElementById('myframe').setAttribute('src','all_orders.html');
	}
}