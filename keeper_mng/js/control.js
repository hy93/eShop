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
	section.innerHTML='订单信息管理';
	section.setAttribute('onclick',"change_orders('all')");
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

function change_userinfo(){
	document.getElementById('myframe').setAttribute('src','user_info.html');
	var location = document.getElementById('location');
	section.innerHTML='个人信息管理';
	section.setAttribute('onclick','change_userinfo()');
	location.innerHTML='修改注册信息';
}
function change_pwd(){
	document.getElementById('myframe').setAttribute('src','../changepwd.html');
	var location = document.getElementById('location');
	section.innerHTML='个人信息管理';
	section.setAttribute('onclick','change_userinfo()');
	location.innerHTML='修改密码';	
}

function change_banner(){
	document.getElementById('myframe').setAttribute('src','banner.html');
	var location = document.getElementById('location');
	section.innerHTML='店铺信息管理';
	section.setAttribute('onclick','change_banner()');
	location.innerHTML='更换横幅';
}

function change_posters(){
	document.getElementById('myframe').setAttribute('src','posters.html');
	var location = document.getElementById('location');
	section.innerHTML='店铺信息管理';
	section.setAttribute('onclick','change_banner()');
	location.innerHTML='更换海报';
}
function change_basic_info(){
	document.getElementById('myframe').setAttribute('src','basic_info.html');
	var location = document.getElementById('location');
	section.innerHTML='店铺信息管理';
	section.setAttribute('onclick','change_banner()');
	location.innerHTML='店铺基本信息';
}
function change_detail_info(){
	document.getElementById('myframe').setAttribute('src','detail_info.html');
	var location = document.getElementById('location');
	section.innerHTML='店铺信息管理';
	section.setAttribute('onclick','change_banner()');
	location.innerHTML='店铺详细信息';	
}