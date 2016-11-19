function attach_attr(){
	var name = document.getElementById("attr_name").value;
	if(name!=null&&name!=""){
		var ul = document.getElementById("pre_attrs");
		var li = document.createElement("li");
		var id = ul.childNodes.length+1;
		li.innerHTML = "<div class=\"lalala\">"+
				name+"<a class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#myModal\" onclick=\"openframe("+id+")\">设置选项</a>"
				+"<a class=\"close\" onclick=\"delete_attr("+id+")\">&times;</a></div>";
		li.setAttribute('class','alert alert-success');
		li.setAttribute('id','attr_'+id);
		ul.appendChild(li);
	}
	document.getElementById("attr_name").value = "";
}


function delete_attr(n){
	var ul = document.getElementById("pre_attrs");
	var li = document.getElementById("attr_"+n);
	if(li!=null){
		ul.removeChild(li);
	}
}

function openframe(n){
	document.getElementById("myModal").setAttribute('attrid','attr_'+n);
}

function add_opt(){
	var attrid = document.getElementById("myModal").getAttribute('attrid');
	var attr = document.getElementById(attrid);
	var ifpic = document.getElementById("opt_img_check").checked;
	var optstring = document.getElementById("opt_name").value;
	if(ifpic==true){
	 	var opt = document.createElement('img');
	 	opt.setAttribute('src','img/default.png');
	 	opt.setAttribute('data-toggle','tooltip');
	 	opt.setAttribute('title',optstring);
	 	attr.appendChild(opt);
	 	document.getElementById('closemodal').click();
	}else{
		var opt = document.createElement('div');
		opt.setAttribute('class','optdiv');
		opt.innerHTML = optstring;
		attr.appendChild(opt);
		document.getElementById('closemodal').click();
	}
	
}